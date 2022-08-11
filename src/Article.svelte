<script lang="ts">
  import { rul } from "./Ruleset";
  import Illustration from "./Illustration.svelte";
  import Conditions from "./Conditions.svelte";
  import BaseServices from "./BaseServices.svelte";
  import { Link, LinksPage, Value, LinksList, Tr } from "./Components";

  import { createEventDispatcher } from "svelte";
import ArticleBody from "./ArticleBody.svelte";
  const dispatch = createEventDispatcher();

  /**@type {Article}*/
  export let article = {} as any;
  export let query;
  let textwithHighlights;
  let other = false;

  $: {
    if(article == null)
      debugger;
    textwithHighlights = article.text || "";

    if (textwithHighlights == "") {
      let lookup = rul.research[article.id]?.lookup;
      if (lookup) textwithHighlights = rul.tr(lookup);
    }

    other = article.section == "OTHER" ? { BaseServices }[article.id] : false;
  }
</script>

<svelte:head>
  <title>{rul.tr(article.title || "XPedia")}</title>
  <!--
  <meta property="og:title" content={rul.tr(article.title || "XPedia")} />
  {#if article.text}<meta
      property="og:description"
      content={article.text}
    />{/if}
  {#if article.image_id}<meta
      property="og:image"
      content={rul.sprite(article.image_id)}
    />{/if}
  -->
</svelte:head>

<h1>
  <nobr><Tr s={article.title} /></nobr>
  <span style="flex:1" />
  <button class="page-turn" on:click={(e) => dispatch("prev")}>⮜</button>
  <button class="page-turn" on:click={(e) => dispatch("next")}>⮞</button>
</h1>

{#if article.id == "SERVICES"}
  <svelte:component this={BaseServices} />
{:else if article.section == "CONDITIONS"}
  <Conditions conditions={rul.startingConditions[article.id]} />
{:else if article.section == "CATEGORIES"}
  <LinksPage links={rul.categories[article.id]} />
{:else if article.section == article.id}
  <LinksPage links={rul.sections[article.id].articles.map((a) => a.id)} />
{/if}

<div style="max-width:100%">
  <div class="main-flex">
    <svelte:component this={other} {query} />

    <ArticleBody id={article.id} text={textwithHighlights}/>
    
    {#if !(article.id in rul.units)}
      <Illustration id={article.image_id} />
    {/if}

    <div style="height:200px">&nbsp;</div>
  </div>
</div>
