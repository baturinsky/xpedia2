<script lang="ts">
  import { rul, sortFirstLast, damageTypes, Stats, statsList } from "./Ruleset";
  import Illustration from "./Illustration.svelte";
  import Conditions from "./Conditions.svelte";
  import BaseServices from "./BaseServices.svelte";
  import TableSort from "./TableSort.svelte"
  import SectionTable from "./SectionTable.svelte"
  import { Link, LinksPage, Value, LinksList, Tr } from "./Components";

  import { createEventDispatcher } from "svelte";
  import ArticleBody from "./ArticleBody.svelte";

  const dispatch = createEventDispatcher();

  /**@type {Article}*/
  export let article = {} as any;
  export let query;
  let textwithHighlights;
  let other = false;
  let aId;

  $: {
    if(article == null)
      debugger;
    textwithHighlights = article.text || "";

    if (textwithHighlights == "") {
      let lookup = rul.research[article.id]?.lookup;
      if (lookup) textwithHighlights = rul.tr(lookup);
    }

    other = article.section == "OTHER" ? { BaseServices }[article.id] : false;
    aId = article.id;
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
{:else if article.id == "FACILITIES"}
  <SectionTable {aId}
    entries={Object.values(rul.facilities)} 
    fields={["size", "monthlyCost", "storage", "personnel","workshops", "aliens"]}
    extraFields={["buildCost", "buildTime", "prisonType", "manaRecoveryPerDay", "sickBayAbsoluteBonus", "sickBayRelativeBonus"]}
  />
{:else if article.id == "CRAFTS"}
  <SectionTable {aId} entries={Object.values(rul.crafts)} fields={["speedMax","soldiers"]}/>
{:else if article.id == "ARMORS"}
  <SectionTable {aId}
    entries={Object.values(rul.armors)} 
    fields={["size", "frontArmor", "sideArmor", "rearArmor", "underArmor"]}
    extraFields={[...damageTypes, ...statsList]}
  />
{:else if article.id == "CONDITIONS"}
  <Conditions conditions={rul.startingConditions[article.id]} />
{:else if article.id == "CATEGORIES"}
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
