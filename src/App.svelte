<script>
  import { tick, afterUpdate } from "svelte";
  import { rul } from "./Ruleset";
  import { Link, Intro, LinksPage, Value, LinksList, favicon } from "./Components";
  import Article from "./Article.svelte";
  import { loadByHttp } from "./load";

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

  let isTouch = "ontouchstart" in window;

  async function loadRules() {
    let { ruls, langs } = await loadByHttp();
    await rul.load({ ruls, langs });
  }

  let rulesLoaded = loadRules();

  function goTo(id) {
    window.location.hash = "##" + id;
  }

  function checkHash() {
    showDropdown = showLanguagesDropdown = false;
    let hash = decodeURI(document.location.hash);
    if (hash.substr(0, 2) != "##") return;
    id = hash.substr(2);

    if (id == "MAIN") {
      query = "";
    }
    if (id) {
      let dd = id.indexOf("::");
      if (dd != -1) {
        query = id.substr(dd + 2);
        id = id.substr(0, dd);
      }

      if (id == "SEARCH") {
        if (query.length >= 2)
          found = rul.search.findArticles(query).map((a) => a.id);
        else found = 0;
        article = null;
      } else {
        found = null;
        if (!article || article.id != id) article = rul.article(id);
      }

      console.log(id);
      console.log(article);
    }

    if (article) {
      if (article.section && currentSection != article.section)
        currentSection = article.section;
    } else {
      currentSection = null;
    }

    if (activeOption) {
      activeOption.scrollIntoView({ behavior: "auto", block: "center" });
    }
  }

  function nextArticle(delta) {
    let nextArticle = rul.findNextArticle(article, delta);
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

  function selectSection(id) {
    currentSection = rul.sections[id];
  }

  window.onhashchange = checkHash;

  rulesLoaded.then(checkHash);

  $: {
    console.info(article || "no article");
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
      while (el && el.attributes && !el.attributes.tooltip) el = el.parentNode;

      if (el && el.attributes) {
        let idattr = el.attributes.tooltip;
        let rect = e.target.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 + "px";
        tooltip.style.top = rect.top + "px";
        let id = idattr.value;
        toggleTooltip(
          id in rul.lang && !e.shiftKey ? rul.lang[id] : id.substr(4)
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
    <title>XPedia</title>
  {/if}
  <meta name="keywords" content="OpenXCom" />
  <link rel='icon' type='image/png' href={favicon}>  
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
  <nav class="navbar flex-horisontal">
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
      class="navbar-dropdown-container"
      on:mouseover={(e) => dropdown(true)}
      on:mouseout={(e) => dropdown(false)}
    >
      <div class="navbar-button" on:mousedown={(e) => dropdown()}>
        <img src={favicon} alt="XPedia" class="xpedia-icon" />
        <nobr>
          <span class="on-wide">{rul.str("BootyPedia")}&nbsp;</span>
          <span style="transform:scale(1.5,0.75); display:inline-block;">
            v
          </span>
          &nbsp;
        </nobr>
      </div>

      <div
        class="navbar-dropdown"
        style={showDropdown ? "visibility:visible" : "visibility:hidden"}
      >
        <div class="flex-horisontal" style="flex-wrap:nowrap">
          <div class="navbar-auto navbar-list">
            <a href="##MAIN" style="text-decoration:underline;">
              {rul.tl("HOME")}
            </a>
            <div style="height:0.5em;" />
            {#each rul.typeSectionsOrder as section, i}
              <a href={"##" + section.id}>{section.title}</a>
            {/each}
          </div>
          <div class="navbar-custom navbar-list">
            {#each rul.sectionsOrder as section, i}
              <a href={"##" + section.id}>{section.title}</a>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <a
      class="navbar-button navbar-current-article"
      href={"##" + (currentSection ? currentSection.id : "MAIN")}
    >
      {currentSection ? currentSection.title : ""}
    </a>

    <div class="stretcher" />

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

    <div class="navbar-search">
      <input
        class="input"
        type="text"
        bind:value={query}
        on:keyup={searchKeyUp}
        placeholder={rul.tl("Search...")}
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
        {rul.tl("A-Z")}
      </button>

      {#each article && article.section && article.section.isType() ? rul.typeSectionsOrder : rul.sectionsOrder as section}
        {#if !currentSection || section.id == currentSection.id}
          <p class="menu-label">{section.title}</p>
          <div class="menu-list">
            {#each sortedArticles(section.articles) as option}
              {#if article && article.id == option.id}
                <a
                  href={"##" + option.id}
                  bind:this={activeOption}
                  class="active-article-option side-link"
                >
                  {option.title}
                </a>
              {:else}
                <a
                  class="side-link"
                  href={"##" + option.id}
                  on:click={() => (ignoreNextAutoscroll = true)}
                >
                  {option.title}
                </a>
              {/if}
            {/each}
          </div>
        {/if}
      {/each}
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
    {#if article}
      <Article
        {article}
        {query}
        on:prev={(e) => nextArticle(-1)}
        on:next={(e) => nextArticle(1)}
      />
    {:else if query}
      Searching "
      <em>{query}</em>
      ":
      <br />
      {#if found && found.length > 0}
        <LinksPage links={found} />
      {:else if query.length < 2}
        <i>Query too short</i>
      {:else if searchDelayHandle}
        ...
      {:else}
        <i>Nothing found</i>
      {/if}
    {:else if !query}
      <!--
      {#each rul.sectionsOrder.concat(rul.typeSectionsOrder) as section}
        <h1><a href={'#' + section.id}>{section.title}</a></h1>
        <LinksPage links={section.articles.map(a => a.id)} />
      {/each}-->
      {@html rul.tl("Main Page")}
    {/if}
  </div>

  <div class="tooltip fadein" bind:this={tooltip}>Tooltip</div>
{/await}