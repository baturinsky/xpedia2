<script>
  import { rul, Article as ArticleRul } from "./Ruleset";
  import { LinksPage, Tr, tr, favicon, divider } from "./Components";
  import Article from "./Article.svelte";
  import { loadByHttp, loadPacked } from "./load";
  import { setContext } from "svelte";
  import { revealed, reveal, revealLock } from "./store";
import Download from "./Download.svelte";

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
  let allowHugeFont = false;
  let showDropdown = false;
  let showLanguagesDropdown = false;
  let tooltip;
  let searching = false;

  let isTouch = "ontouchstart" in window;
  let lang;

  /**
   *
   * @param {string} text
   * @param {string} substr
   */
  function contains(text, substr) {
    return text.toLowerCase().indexOf(substr) != -1;
  }

  async function loadRules() {
    let data = loadPacked()
    if(!data)
      data = await loadByHttp();
    rul.load(data);
  }

  setContext("main", { revealed: () => revealed });

  let rulesLoaded = loadRules();

  function selectLang(n){
    lang = n;
    rul.selectLang(n)
  }

  function goTo(id) {
    window.location.hash = "##" + id;
  }

  async function checkHash() {
    showDropdown = showLanguagesDropdown = false;
    let hash = decodeURI(document.location.hash);
    if (hash.substring(0, 2) != "##") return;
    id = hash.substring(2);

    if (id == "MAIN") {
      query = "";
    }

    searching = false;

    if (id) {
      let dd = id.indexOf("::");
      if (dd != -1) {
        query = id.substring(dd + 2);
        id = id.substring(0, dd);
      }

      if (id == "SEARCH") {
        searching = true;
        if (query.length >= 2) {
          found = await rul.search[rul.langName].findArticles(query);
          //debugger;
          //found = result.map((a) => a.id);
        } else found = 0;
        article = null;
      } else {
        found = null;
        if (!article || article.id != id) article = rul.article(id);
      }

      console.log(id);
      console.log(article);
    }

    if (article) {
      if (article.sections) {
        if (!article.sections.includes(currentSection)) {
          currentSection = article.sections[0];
        }
      }
    }

    if (activeOption) {
      activeOption.scrollIntoView({ behavior: "auto", block: "center" });
    }
  }

  function nextArticle(delta) {
    let nextArticle = rul.findNextArticle(article, delta, currentSection);
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
      e.key == "Enter" ? 10 : 300
    );
  }

  window.onhashchange = checkHash;

  rulesLoaded.then(checkHash);

  $: {
    if (article) console.info(article);
    //document.documentElement.style.fontSize = hugeFont ? "24pt" : "12pt";
  }

  let sortArticles = false;

  function dropdown(val = null) {
    if (val === null) {
      showDropdown = !showDropdown;
    } else {
      if (!isTouch) showDropdown = val;
    }
  }

  $: sortedArticles = (articles) =>
    sortArticles
      ? articles.slice().sort((a, b) => (a.title > b.title ? 1 : -1))
      : articles;

  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName == "ArrowRight") nextArticle(1);
    if (keyName == "ArrowLeft") nextArticle(-1);
  });

  window.addEventListener("mousemove", async (e) => {
    if (tooltip) {
      let el = e.target;
      while (el && el.attributes && !("tooltip" in el.attributes))
        el = el.parentNode;

      if (el && el.attributes && el.attributes.tooltip) {
        let idattr = el.attributes.tooltip;
        let rect = e.target.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 + "px";
        tooltip.style.top = rect.top + "px";
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
</script>

<svelte:head>
  {#if !article}
    <title>{tr("XPedia")}</title>
  {/if}
  <meta charset='utf8'>
  <meta name="keywords" content="OpenXCom" />
  <style src="main.css"/>
  <link rel="icon" type="image/png" href={favicon} />
</svelte:head>

{#await rulesLoaded}
  <div class="centered">
    <svg>
      <g
        transform="translate(50 50)"
        id="g4"
        style="fill:#64ccbc;fill-opacity:1"
      >
        <g id="g6" style="fill:#64ccbc;fill-opacity:1">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0;360"
            keyTimes="0;1"
            dur="3s"
            repeatCount="indefinite"
          />
          <path
            d="M37.43995192304605 -6.5 L47.43995192304605 -6.5 L47.43995192304605 6.5 L37.43995192304605 6.5 A38 38 0 0 1 35.67394948182593 13.090810836924174 L35.67394948182593 13.090810836924174 L44.33420351967032 18.090810836924174 L37.83420351967032 29.34914108612188 L29.17394948182593 24.34914108612188 A38 38 0 0 1 24.34914108612188 29.17394948182593 L24.34914108612188 29.17394948182593 L29.34914108612188 37.83420351967032 L18.090810836924184 44.33420351967032 L13.090810836924183 35.67394948182593 A38 38 0 0 1 6.5 37.43995192304605 L6.5 37.43995192304605 L6.500000000000001 47.43995192304605 L-6.499999999999995 47.43995192304606 L-6.499999999999996 37.43995192304606 A38 38 0 0 1 -13.09081083692417 35.67394948182593 L-13.09081083692417 35.67394948182593 L-18.09081083692417 44.33420351967032 L-29.34914108612187 37.834203519670325 L-24.349141086121872 29.173949481825936 A38 38 0 0 1 -29.17394948182592 24.34914108612189 L-29.17394948182592 24.34914108612189 L-37.83420351967031 29.349141086121893 L-44.33420351967031 18.0908108369242 L-35.67394948182592 13.090810836924193 A38 38 0 0 1 -37.43995192304605 6.5000000000000036 L-37.43995192304605 6.5000000000000036 L-47.43995192304605 6.500000000000004 L-47.43995192304606 -6.499999999999993 L-37.43995192304606 -6.499999999999994 A38 38 0 0 1 -35.67394948182593 -13.090810836924167 L-35.67394948182593 -13.090810836924167 L-44.33420351967032 -18.090810836924163 L-37.834203519670325 -29.34914108612187 L-29.173949481825936 -24.34914108612187 A38 38 0 0 1 -24.349141086121893 -29.17394948182592 L-24.349141086121893 -29.17394948182592 L-29.349141086121897 -37.834203519670304 L-18.0908108369242 -44.334203519670304 L-13.090810836924195 -35.67394948182592 A38 38 0 0 1 -6.500000000000005 -37.43995192304605 L-6.500000000000005 -37.43995192304605 L-6.500000000000007 -47.43995192304605 L6.49999999999999 -47.43995192304606 L6.499999999999992 -37.43995192304606 A38 38 0 0 1 13.090810836924149 -35.67394948182594 L13.090810836924149 -35.67394948182594 L18.090810836924142 -44.33420351967033 L29.349141086121847 -37.83420351967034 L24.349141086121854 -29.17394948182595 A38 38 0 0 1 29.17394948182592 -24.349141086121893 L29.17394948182592 -24.349141086121893 L37.834203519670304 -29.349141086121897 L44.334203519670304 -18.0908108369242 L35.67394948182592 -13.090810836924197 A38 38 0 0 1 37.43995192304605 -6.500000000000007 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20"
            fill="#c5523f"
            id="path8"
            style="fill:#64ccbc;fill-opacity:1"
          />
        </g>
      </g>
    </svg>
  </div>
{:then}
{#key lang}
  <nav class="navbar flex-horisontal">
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
      class="navbar-dropdown-container"
      on:mouseover={(e) => dropdown(true)}
      on:mouseout={(e) => dropdown(false)}
    >
      <div class="navbar-button dropdown-button" on:mousedown={(e) => dropdown()}>
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
        <div class="flex-horisontal" style="flex-wrap:nowrap">
          <div class="navbar-auto navbar-list">
            <a href="##MAIN" style="text-decoration:underline;">
              {rul.tr("HOME")}
            </a>
            <div style="height:0.5em;" />
            {#each rul.sectionsOrder as section, i}
              <a href={"##" + section.id}>{rul.tr(section.id)}</a>
            {/each}
          </div>
          <div class="navbar-custom navbar-list">
            {#each rul.typeSectionsOrder as section, i}
              <a href={"##" + section.id}>{rul.tr(section.id)}</a>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <a
      class="navbar-button navbar-current-article"
      href={"##" + (currentSection ? currentSection.id : "MAIN")}
    >
      {currentSection ? rul.tr(currentSection.id) : ""}
    </a>

    <div class="stretcher" />

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
      on:click={(e) => revealLock()}
    >
      👁
    </div>

    {#if rul.config && rul.config.languages && rul.config.languages.length > 1}
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <div
        class="navbar-dropdown-container"
        on:mouseover={(e) => !isTouch && (showLanguagesDropdown = true)}
        on:mouseout={(e) => !isTouch && (showLanguagesDropdown = false)}
      >
        <div
          class="navbar-button"
          on:mousedown={(e) => (showLanguagesDropdown = !showLanguagesDropdown)}
        >
          <big>Aあ</big>
        </div>
        <div
          class="navbar-dropdown"
          style={showLanguagesDropdown
            ? "visibility:visible"
            : "visibility:hidden"}
        >
          {#each rul.config.languages as lang}
            <a href="{lang.save_as}##{id}">{lang.name}</a>
          {/each}
        </div>
      </div>
    {/if}

    {#if allowHugeFont}
      <button class="navbar-button" on:click={(e) => (hugeFont = !hugeFont)}>
        <span style="font-size:150%">A</span>
        <span style="font-size:75%">A</span>
      </button>
    {/if}

    <select on:change={e=>{selectLang(e.target.value)}}>
      {#each rul.langNames as langName}
        <option selected={lang == langName} value={langName}>{rul.str(langName) || langName}</option>
      {/each}
    </select>

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
        on:click={(e) => (sortArticles = !sortArticles)}
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
              <Tr s={option.title} />
            </a>
          {:else}
            <a
              class="side-link"
              href={"##" + option.id}
              on:click={() => (ignoreNextAutoscroll = true)}
            >
              <Tr s={option.title} />
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
    }}
    style={seeSide ? "" : "left:1em;"}
  >
    <span style="font-size:150%">≡</span>
  </button>

  <div class="main" style={seeSide ? "" : "padding-left:1rem;"}>
    {#if query && searching}
      Searching "
      <em>{query}</em>
      ":
      <br />
      {#if found && found.length > 0}
        <LinksPage
          links={found.sort((a, b) =>
            contains(rul.tr(a), query) > contains(rul.tr(b), query) ? -1 : 1
          )}
        />
      {:else if query.length < 2}
        <i>Query too short</i>
      {:else if searchDelayHandle}
        ...
      {:else}
        <i>Nothing found</i>
      {/if}
    {:else if article}
      <Article
        {article}
        {query}
        on:prev={(e) => nextArticle(-1)}
        on:next={(e) => nextArticle(1)}
      />
    {:else}
      <h4><Tr s="Pedia sections"/></h4>
      <p>
        {#each rul.sectionsOrder as section, i}
          {@html divider(i)}
          <a href={"##" + section.id}>{section.title}</a>
        {/each}
      </p>
      <h4><Tr s="Extra sections"/></h4>
      <p>
        {#each rul.typeSectionsOrder as section, i}
          {@html divider(i)}
          <a href={"##" + section.id}>{section.title}</a>
        {/each}
      </p>
      <h4><Tr s="About XPedia"/></h4>
      <Tr s="aboutxpedia"/>
      <Download text="testtext"/>
    {/if}
  </div>

  <div class="tooltip fadein" bind:this={tooltip}>Tooltip</div>
{/key}
{/await}
