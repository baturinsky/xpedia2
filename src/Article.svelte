<script lang="ts">
  import {
    rul,
    sortFirstLast,
    damageTypes,
    Stats,
    statsList,
    battleStats,
    internalBattleTypes,
  } from "./Ruleset";
  import Illustration from "./Illustration.svelte";
  import Conditions from "./Conditions.svelte";
  import BaseServices from "./BaseServices.svelte";
  import TableSort from "./TableSort.svelte";
  import SectionTable from "./SectionTable.svelte";
  import { Link, LinksPage, Value, LinksList, Tr } from "./Components";

  import { createEventDispatcher } from "svelte";
  import ArticleBody from "./ArticleBody.svelte";
  import Research from "./Research.svelte";
  import CanvasImage from "./CanvasImage.svelte";
  import Manufacture from "./Manufacture.svelte";

  const dispatch = createEventDispatcher();

  /**@type {Article}*/
  export let article = {} as any;
  export let query;
  let text;
  let other: any = false;
  let aId;

  $: {
    if (article == null) debugger;

    other = article.section == "OTHER" ? { BaseServices }[article.id] : false;
    aId = article.id;
  }
</script>

<svelte:head>
  <title>{rul.tr(article.id || "XPedia", { icon: "simple" })}</title>
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

<div class="section-list">
  <Value
    val={article.sections.map((s) => s.id).filter((id) => id != article.id)}
  />&nbsp;
</div>

{#if article.id == "SERVICES"}
  <svelte:component this={BaseServices} />
{:else if article.id == "FACILITIES"}
  <SectionTable
    {aId}
    entries={Object.values(rul.facilities)}
    fields={[
      "size",
      "monthlyCost",
      "storage",
      "personnel",
      "workshops",
      "kennel",
      "prison",
    ]}
    extraFields={[
      "buildCost",
      "buildTime",
      "manaRecoveryPerDay",
      "sickBayAbsoluteBonus",
      "sickBayRelativeBonus",
      "defense",
      "hitRatio",
    ]}
  />
{:else if article.id == "COMMENDATIONS"}
  <SectionTable
    {aId}
    entries={Object.values(rul.commendations)}
    fields={[...statsList, "visibilityAtDark"]}
    extraFields={[
      ...battleStats.map((s) => "recovery." + s),
      "description",
      "visibilityAtDay",
      "camouflageAtDark",
      "camouflageAtDay",
      "frontArmor",
      "sideArmor",
      "rearArmor",
      "underArmor",
    ]}
  />
{:else if article.id == "CRAFTS"}
  <SectionTable
    {aId}
    entries={Object.values(rul.crafts)}
    fields={[
      "speedMax",
      "soldiers",
      "vehicles",
      "weapons",
      "damageMax",
      "repairRate",
      "costRent",
    ]}
  />
{:else if article.id == "CRAFT_WEAPONS"}
  <SectionTable
    {aId}
    entries={Object.values(rul.craftWeapons)}
    fields={["damage", "accuracy", "range", "ammoMax"]}
    filters={{
      weaponType: ["any", ...Object.keys(rul.weaponTypes)],
    }}
  />
{:else if article.id == "SOLDIERS"}
  <SectionTable
    {aId}
    entries={Object.values(rul.soldiers)}
    fields={[...statsList, "manufacture", "events"]}
  />
{:else if article.id == "ATTACKS"}
  <SectionTable
    {aId}
    entries={rul.attacks}
    fields={["name", "accuracy", "damage", "damageType", "shots", "range"]}
    extraFields={[
      "ToArmorPre",
      "ToStun",
      "RandomType",
      "ToHealth",
      "ToTile",
      "ResistType",
      "ToWound",
      "SmokeThreshold",
      ...statsList,
      ,
      ...statsList.map((v) => "acc*" + v),
    ]}
    filters={{
      internalBattleType: ["any", ...internalBattleTypes],
      damageTypes: ["any", ...damageTypes],
    }}
  />
{:else if article.id == "ITEMS"}
  <SectionTable
    {aId}
    entries={Object.values(rul.items)}
    fields={["costSell", "costBuy", "size", "weight", "power"]}
    extraFields={[...rul.itemFields]
      .filter(
        (f) => !["costSell", "costBuy", "size", "weight", "power"].includes(f)
      )
      .sort()}
    filters={{
      internalBattleType: ["any", ...internalBattleTypes],
      damageTypes: ["any", ...damageTypes],
      category: ["any", ...rul.sortStrings(Object.keys(rul.categories))],
    }}
  />
{:else if article.id == "MANUFACTURE"}
  <SectionTable
    {aId}
    entries={Object.values(rul.manufacture)}
    fields={["cost", "profit", "profitPerHour", "sizeChange", "time"]}
    extraFields={[
      "requiredItems",
      "producedItems",
      "requires",
      "requiresBaseFunc",
      "space",
    ]}
    filters={{
      category: ["any", ...Object.keys(rul.manufactureCategories)],
    }}
  />
{:else if article.id == "ARMORS"}
  <SectionTable
    {aId}
    entries={Object.values(rul.armors)}
    fields={["size", "frontArmor", "sideArmor", "rearArmor", "underArmor"]}
    extraFields={[
      ...damageTypes,
      ...statsList,
      "psiVision",
      "visibilityAtDark",
      "visibilityAtDay",
      "camouflageAtDark",
      "camouflageAtDay",
      "heatVision",
      "fearImmune",
      "ARMOR_ENERGY_SHIELD_CAPACITY",
      "ARMOR_ENERGY_SHIELD_PER_TURN",
      "ARMOR_ENERGY_SHIELD_FLASH_COLOR",
      "ARMOR_ENERGY_SHIELD_TYPE",
    ]}
    filters={{
      armorUsers: ["any", "allies", "enemies", ...Object.keys(rul.soldiers)],
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

{#if article.section == "MANUFACTURE_CATEGORIES" && article.id != "MANUFACTURE_CATEGORIES"}
  <LinksPage links={rul.manufactureCategories[article.id]} />
{/if}

{#if article.text}
  <div class="main-table main-text">
    {#if rul.items[article.id]?.sprite && article.text && rul.items[article.id].battleType != 2}
      <div class="article-text-image">
        <CanvasImage item={rul.items[article.id]} zoom={2} />
      </div>
    {/if}
    <div>
      {@html article.text}
      {#if article.requires && article.requires != article.id}
        <br/>
        <Tr s="Research required:" />
        {#each article.requires || [] as req}
          <Value val={req} />
        {/each}
      {/if}
    </div>
  </div>
{/if}

<div style="max-width:100%">
  <div class="main-flex">
    <svelte:component this={other} {query} />

    <ArticleBody id={article.id} />

    {#if !(article.id in rul.units)}
      <CanvasImage src={article.image_id} />
    {/if}

    <div style="height:200px">&nbsp;</div>
  </div>
</div>
