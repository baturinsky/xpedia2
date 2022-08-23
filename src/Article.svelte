<script lang="ts">
  import { rul, sortFirstLast, damageTypes, Stats, statsList, battleStats } from "./Ruleset";
  import Illustration from "./Illustration.svelte";
  import Conditions from "./Conditions.svelte";
  import BaseServices from "./BaseServices.svelte";
  import TableSort from "./TableSort.svelte"
  import SectionTable from "./SectionTable.svelte"
  import { Link, LinksPage, Value, LinksList, Tr } from "./Components";

  import { createEventDispatcher } from "svelte";
  import ArticleBody from "./ArticleBody.svelte";
  import Research from "./Research.svelte";

  const dispatch = createEventDispatcher();

  /**@type {Article}*/
  export let article = {} as any;
  export let query;
  let text;
  let other = false;
  let aId;

  $: {
    if(article == null)
      debugger;

    other = article.section == "OTHER" ? { BaseServices }[article.id] : false;
    aId = article.id;
  }
</script>

<svelte:head>
  <title>{rul.tr(article.id || "XPedia", {icon:"simple"})}</title>
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
  <nobr><Tr s={article.id} /></nobr>
  <span style="flex:1" />
  <button class="page-turn" on:click={(e) => dispatch("prev")}>⇦</button>
  <button class="page-turn" on:click={(e) => dispatch("next")}>⇨</button>
</h1>

<div class="section-list"><Value val={article.sections.map(s=>s.id).filter(id=>id!=article.id)}/>&nbsp;</div> 

{#if article.id == "SERVICES"}
  <svelte:component this={BaseServices} />
{:else if article.id == "FACILITIES"}
  <SectionTable {aId}
    entries={Object.values(rul.facilities)} 
    fields={["size", "monthlyCost", "storage", "personnel","workshops", "kennel", "prison"]}
    extraFields={["buildCost", "buildTime", "manaRecoveryPerDay", "sickBayAbsoluteBonus", "sickBayRelativeBonus"]}
  />
{:else if article.id == "COMMENDATIONS"}
  <SectionTable {aId} 
    entries={Object.values(rul.commendations)} 
    fields={[...statsList, "visibilityAtDark"]}
    extraFields={[
      ...battleStats.map(s=> "recovery."+s),
      "description", "visibilityAtDay", "camouflageAtDark", "camouflageAtDay", "frontArmor", "sideArmor", "rearArmor", "underArmor"
      ]}
  />
{:else if article.id == "CRAFTS"}
  <SectionTable {aId} 
    entries={Object.values(rul.crafts)} 
    fields={["speedMax","soldiers", "vehicles", "weapons", "damageMax"]}
  />
{:else if article.id == "ARMORS"}
  <SectionTable {aId}
    entries={Object.values(rul.armors)} 
    fields={["size", "frontArmor", "sideArmor", "rearArmor", "underArmor"]}
    extraFields={[
      ...damageTypes, ...statsList, 
      "psiVision", "visibilityAtDark", "visibilityAtDay", "camouflageAtDark", "camouflageAtDay",
      "ARMOR_ENERGY_SHIELD_CAPACITY", "ARMOR_ENERGY_SHIELD_PER_TURN", "ARMOR_ENERGY_SHIELD_FLASH_COLOR", "ARMOR_ENERGY_SHIELD_TYPE"
    ]}
    filters={{
      armorUsers:["any", "allies", "enemies", ...Object.keys(rul.soldiers)],
      size: ["any", "1", "2"],
      /*startingConditions: ["any", ...Object.keys(rul.startingConditions)]*/
    }}
  />
{:else if article.id == "CONDITIONS"}
  <Conditions conditions={rul.startingConditions[article.id]} />
{:else if article.section == article.id}
  <LinksPage links={rul.sections[article.id].articles.map((a) => a.id)} />
{/if}

{#if article.section == "CATEGORIES" && article.id != "CATEGORIES"}
  <LinksPage links={rul.categories[article.id]} />
{/if}

<div style="max-width:100%">
  <div class="main-flex">
    <svelte:component this={other} {query} />    

    {#if article.requires && article.requires != article.id}
      <Tr s="Research required:"/>
      {#each article.requires || [] as req}
        <Value val={req}/>
      {/each}
    {/if}

    <ArticleBody id={article.id} text={article.text}/>    
    
    {#if !(article.id in rul.units)}
      <Illustration id={article.image_id} />
    {/if}

    <div style="height:200px">&nbsp;</div>
  </div>
</div>
