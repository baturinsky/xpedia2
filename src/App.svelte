<script>
  /**
   * UI root. Left and top bar. Switches between search results, article and the front page.
   */

  "use strict";
  import { rul, Article as ArticleRul } from "./Ruleset";
  import {
    LinksPage,
    Tr,
    tr,
    favicon,
    divider,
    tableSections,
  } from "./Components";
  import Article from "./Article.svelte";
  import CogAnimation from "./CogAnimation.svelte";
  import { afterUpdate, onMount, setContext } from "svelte";
  import {
    revealed,
    reveal,
    revealLock,
    loaded,
    linksPageSorted,
    loadingFile,
    markersLoaded,
    leftRightClickSwipe,
  } from "./store";
  import { isAncestorOf } from "./util";
  import Download from "./Download.svelte";
  import onSwipe from "./swipe";
  import { useCache, packedData } from "./load";

  /**@type {ArticleRul}*/
  let article = null;
  let found = null;
  let query = "";
  let currentSection = null;
  let activeOption;
  let ignoreNextAutoscroll = false;
  let id = "";
  let searchDelayHandle = null;
  let seeSide = true;
  let hugeFont = false;
  let allowHugeFont = true;
  let showDropdown = false;
  let showLanguagesDropdown = false;
  let tooltip;
  let searching = false;
  let saveLoaded = false;
  let sortArticles = false;

  let isTouch = "ontouchstart" in window;
  let lang;
  let markers;

  setContext("main", { revealed: () => revealed });

  loaded.subscribe((done) => {
    if (done) {
      loadState();
      checkHash();
    }
  });

  let _linksPageSorted;
  linksPageSorted.subscribe((v) => {
    _linksPageSorted = v;
    saveState();
  });

  let lrcs;
  leftRightClickSwipe.subscribe((v) => {
    lrcs = v;
  });

  let theme = "light";

  function toggleTheme() {
    theme = theme == "light" ? "dark" : "light";
    applyTheme();
    saveState();
  }

  function applyTheme() {
    let lightCSS = document.getElementById("light-css");
    lightCSS.setAttribute("media", theme == "light" ? "" : "none");
  }

  function saveState() {
    if (!saveLoaded) return;
    localStorage.xpediaSettings = JSON.stringify({
      hugeFont,
      seeSide,
      lang,
      sortArticles,
      theme,
      linksPageSorted: _linksPageSorted,
    });
    clog("ss", localStorage.xpediaSettings);
  }

  export function loadState() {
    try {
      clog("ls", localStorage.xpediaSettings);
      let data = JSON.parse(localStorage.xpediaSettings);
      if (data && typeof data == "object") {
        hugeFont = data.hugeFont;
        seeSide = data.seeSide;
        sortArticles = data.sortArticles;
        theme = data.theme;
        linksPageSorted.set(data.linksPageSorted);
        selectLang(data.lang);
        applyTheme();
      }
    } catch (e) {
      console.warn(e);
    }
    saveLoaded = true;
  }

  /**
   *
   * @param {string} text
   * @param {string} substr
   */
  function contains(text, substr) {
    return text.toLowerCase().indexOf(substr) != -1;
  }

  function selectLang(n) {
    if (rul.selectLang(n)) lang = n;
    saveState();
    checkHash();
  }

  function goTo(id) {
    window.location.hash = "##" + id;
  }

  let searchinInProgres;

  async function checkHash() {
    showDropdown = showLanguagesDropdown = false;
    let hash = decodeURI(document.location.hash);
    if (hash.substring(0, 2) != "##") return;
    id = hash.substring(2);

    if (id == "HOME") {
      query = "";
    }

    searching = false;

    if (id) {
      let dd = id.indexOf("::");
      if (dd != -1) {
        query = id.substring(dd + 2).toLowerCase();
        id = id.substring(0, dd);
      }

      if (id == "SEARCH") {
        searching = true;
        if (query.length >= 2) {
          searchinInProgres = true;
          found = await rul.search[rul.langName].findArticles(query);
          searchinInProgres = false;
        } else found = 0;
        article = null;
      } else {
        found = null;
        if (!article || article.id != id) article = rul.article(id);
      }
    }

    if (article) {
      if (article.sections) {
        if (!article.sections.includes(currentSection)) {
          currentSection = article.sections[0];
        }
      }
    }

    if (activeOption) {
      centerOnArticle();
    }
  }

  function centerOnArticle() {
    setTimeout(() => activeOption?.scrollIntoView({ block: "center" }), 50);
  }

  function nextArticle(delta) {
    if (lrcs) {
      lrcs(delta);
      return;
    }
    let nextArticle = rul.findNextArticle(
      article,
      delta,
      currentSection,
      sortArticles
    );
    if (nextArticle) {
      goTo(nextArticle.id);
    }
  }

  function searchKeyUp(e) {
    if (searchDelayHandle) clearTimeout(searchDelayHandle);

    searchDelayHandle = setTimeout(
      () => {
        goTo("SEARCH::" + e.target.value);
        searchDelayHandle = null;
      },
      e.key == "Enter" ? 10 : 1000
    );
  }

  window.onhashchange = checkHash;

  $: {
    //if (article) clog(article);
    document.documentElement.style.fontSize = hugeFont ? "24pt" : "12pt";
  }

  function dropdown(val = null) {
    if (val === null) {
      showDropdown = !showDropdown;
    } else {
      if (!isTouch) showDropdown = val;
    }
  }

  $: sortedArticles = (articles) =>
    sortArticles
      ? [...(articles || [])].sort((a, b) => (a.title > b.title ? 1 : -1))
      : articles;

  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName == "ArrowRight") nextArticle(1);
    if (keyName == "ArrowLeft") nextArticle(-1);
  });

  /*onSwipe(document.body, (right) => {
    if (right) nextArticle(1);
    else nextArticle(-1);
  });*/

  /*document.body.addEventListener("touchstart", (e)=>{
    let tag = e.target.tag;
    if(tag != "A" && tag != "BUTTON" && e.changedTouches && e.changedTouches.length>0){
      let x = e.changedTouches[0].pageX;
      if(x<window.innerWidth/2)
        nextArticle(-1);
      else
      nextArticle(1);
    }    
  })*/

  window.addEventListener("mousemove", async (e) => {
    if (e.screenX < 10 && e.screenY < innerHeight / 3) {
      dropdown(true);
    } else {
      if (e.target && !isAncestorOf(navbarDropDown, e.target)) {
        dropdown(false);
      }
    }

    if (tooltip) {
      let el = e.target;
      while (el && el.attributes && !("tooltip" in el.attributes))
        el = el.parentNode;

      if (el && el.attributes && el.attributes.tooltip) {
        let idattr = el.attributes.tooltip;
        let rect = e.target.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 + "px";
        tooltip.style.top = (rect.top > 100 ? rect.top : rect.top + 120) + "px";
        let id = idattr.value;
        toggleTooltip(
          id in rul.lang && !e.shiftKey ? rul.lang[id] : id.substring(4)
        );
      } else {
        toggleTooltip(null);
      }
    }
  });

  function toggleTooltip(text) {
    tooltip.innerHTML = text;
    let classes = tooltip.classList;
    if (text) {
      classes.add("visible");
    } else {
      classes.remove("visible");
    }
  }

  let navbarDropDown;
</script>

<svelte:head>
  {#if !article}
    <title>{tr("XPedia")}</title>
  {/if}
  <meta charset="utf8" />
  <meta name="keywords" content="OpenXCom" />
  <link rel="icon" type="image/png" href={favicon} />
</svelte:head>

{#if !$loaded}
  <div style="opacity:0.3">{@html $loadingFile}</div>
  <div class="centered">
    <CogAnimation size={200} />
  </div>
{:else}
  {#key [lang, article, markersLoaded]}
    <nav class="navbar flex-horisontal">
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <div
        class="navbar-dropdown-container"
        bind:this={navbarDropDown}
        on:mousemove={(e) => {
          dropdown(true);
        }}
        on:mouseout={(e) => {
          if (e.target && !isAncestorOf(e.target)) {
            dropdown(false);
          }
        }}
      >
        <div
          class="navbar-button dropdown-button"
          on:click={(e) => {
            //dropdown();
            goTo("HOME");
            //e.stopPropagation();
          }}
        >
          <img src={favicon} alt="XPedia" class="xpedia-icon" />
          <nobr>
            <span class="on-wide">{rul.tr("XPedia")}&nbsp;</span>
            <span style="transform:scale(1.5,0.75); display:inline-block;">
              ˅
            </span>
          </nobr>
        </div>

        <div
          class="navbar-dropdown"
          style={showDropdown ? "visibility:visible" : "visibility:hidden"}
        >
          <div class="flex-horisontal">
            <div class="navbar-auto navbar-list">
              <a href="##HOME" style="text-decoration:underline;">
                <Tr s={"HOME"} />
              </a>
              <div style="height:0.5em;" />
              {#each rul.sectionsOrder as section, i}
                <a href={"##" + section.id}><Tr s={section.id} /></a>
              {/each}
            </div>
            <div class="navbar-custom navbar-list">
              {#each rul.sortedTypeSections() as section, i}
                <a href={"##" + section.id}
                  ><Tr s={section.id} />{tableSections.includes(section.id)
                    ? "☰"
                    : ""}</a
                >
              {/each}
            </div>
          </div>
        </div>
      </div>

      <!--
        <a
          class="navbar-button navbar-current-article"
          href={"##" + (currentSection ? currentSection.id : "HOME")}
        >
          {currentSection ? rul.tr(currentSection.id) : ""}
        </a>
      -->

      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <div
        class="navbar-button {$revealed ? 'reveal-lock' : ''}"
        id="reveal"
        on:mouseover={(e) => {
          reveal(true);
        }}
        on:mouseout={(e) => {
          reveal(false);
        }}
        on:click={(e) => {
          revealLock();
          saveState();
        }}
        tooltip="tip_reveal"
      >
        👁
      </div>

      <div class="stretcher on-wide" />

      {#if !packedData}
        <button
          class="navbar-button"
          on:click={(e) => {
            useCache("wipe");
            location.reload();
          }}
          tooltip="tip_refresh"
        >
          ⭯
        </button>
      {/if}

      <button class="navbar-button" on:click={() => toggleTheme()}> ▀▄ </button>

      {#if allowHugeFont}
        <button class="navbar-button" on:click={(e) => (hugeFont = !hugeFont)}>
          <span style="font-size:150%">A</span>
          <span style="font-size:75%">A</span>
        </button>
      {/if}

      {#if rul.langNames?.length > 1}
        {#if rul.langNames?.length <= 3}
          {#each rul.langNames as lang}
            <button class="navbar-button" on:click={(e) => selectLang(lang)}>
              <nobr><Tr s={lang} /></nobr>
            </button>
          {/each}
        {:else}
          <!-- svelte-ignore a11y-mouse-events-have-key-events -->
          <div
            class="navbar-dropdown-container select-language"
            on:mouseover={(e) => !isTouch && (showLanguagesDropdown = true)}
            on:mouseout={(e) => !isTouch && (showLanguagesDropdown = false)}
          >
            <button
              class="navbar-button"
              on:mousedown={(e) =>
                (showLanguagesDropdown = !showLanguagesDropdown)}
            >
              <big><Tr s={rul.langName} /></big>
            </button>
            <div
              class="navbar-dropdown"
              style={showLanguagesDropdown
                ? "visibility:visible"
                : "visibility:hidden"}
            >
              {#each rul.langNames as lang}
                <div class="clickable" on:click={(e) => selectLang(lang)}>
                  <nobr><Tr s={lang} /></nobr>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      {/if}

      <!--
    <select on:change={e=>{selectLang(e.target.value)}}>
      {#each rul.langNames as langName}
        <option selected={lang == langName} value={langName}>{rul.str(langName) || langName}</option>
      {/each}
    </select>-->

      <div class="navbar-search">
        <input
          class="input"
          type="text"
          id="search-string"
          bind:value={query}
          on:keyup={searchKeyUp}
          placeholder={tr("Search...")}
        />
      </div>
    </nav>

    {#if seeSide}
      <nav class="sidebar">
        <button
          class="side-sort-button"
          style={sortArticles ? "" : "text-decoration:line-through"}
          on:click={(e) => {
            sortArticles = !sortArticles;
            centerOnArticle();
            saveState();
          }}
        >
          <Tr s="A-Z" />
        </button>

        <div class="menu-list">
          {#each sortedArticles(currentSection?.articles) || [] as option}
            {#if article && article.id == option.id}
              <a
                href={"##" + option.id}
                bind:this={activeOption}
                class="active-article-option side-link"
              >
                <Tr s={option.id} />
              </a>
            {:else}
              <a
                class="side-link"
                href={"##" + option.id}
                on:click={() => {
                  ignoreNextAutoscroll = true;
                }}
              >
                <Tr s={option.id} />
              </a>
            {/if}
          {/each}
        </div>
        <br />
      </nav>
    {/if}

    <button
      class="side-hide-button"
      on:click={(e) => {
        if (e.button == 0) seeSide = !seeSide;
        saveState();
      }}
      style={seeSide ? "" : "left:1em;"}
    >
      <span style="font-size:150%">≡</span>
    </button>

    <div class="main" id="main" style={seeSide ? "" : "padding-left:1rem;"}>
      {#if query && searching}
        Searching "
        <em>{query}</em>
        ":
        <br />
        {#key found}
          {#if found && found.length > 0}
            <LinksPage
              links={found
                .filter((a) => contains(rul.tr(a).toLowerCase(), query))
                .slice(0, 200)}
            /><br />
            <LinksPage
              links={found
                .filter((a) => !contains(rul.tr(a).toLowerCase(), query))
                .slice(0, 200)}
              title=" "
            />
          {:else if query.length < 2}
            <i>Query too short</i>
          {:else if searchDelayHandle || searchinInProgres}
            <Tr s="Initializing search engine..." /><br />
            <CogAnimation size={30} />
          {:else}
            <i><Tr s="Nothing found" /></i>
          {/if}
        {/key}
      {:else if article}
        <Article
          {article}
          {query}
          on:prev={(e) => nextArticle(-1)}
          on:next={(e) => nextArticle(1)}
        />
      {:else}
        <h2><Tr s="Pedia sections" /></h2>
        <p>
          {#each rul.sectionsOrder as section, i}
            {@html divider(i)}
            <a href={"##" + section.id}>{section.title}</a>
          {/each}
        </p>
        <h2><Tr s="Extra sections" /></h2>
        <p>
          {#each rul.typeSectionsOrder as section, i}
            {@html divider(i)}
            <a href={"##" + section.id}
              >{section.title}{tableSections.includes(section.id) ? "☰" : ""}</a
            >
          {/each}
        </p>
        <h2><Tr s="Mods" /></h2>
        <ul>
          {#each rul.mods as mod}
            <li>{mod.name} {mod.version}</li>
          {/each}
        </ul>
        {#if !packedData}
          <h2><Tr s="Export" /></h2>
          <Tr s="aboutexport" /><br />
          <button class="download"
            on:click={(e) => {
              useCache("wipe");
              location.reload();
            }}
            tooltip="tip_refresh"
          >
            ⭯
          </button>
          <Download title="Export all languages" />
          <Download
            title={rul.langName == "en-US"
              ? `Export English only`
              : `Export current (${rul.tr(rul.langName)}) and English only`}
            onlyCurrent={true}
          />
          <br />
        {/if}
        <h2><Tr s="About XPedia" /></h2>
        <Tr s="STR_ABOUT_XPEDIA" />
      {/if}
    </div>

    <div class="tooltip fadein" bind:this={tooltip}>Tooltip</div>
  {/key}
{/if}
