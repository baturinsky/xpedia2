<script lang="ts">
  import { rul } from "./Ruleset";
  import Illustration from "./Illustration.svelte";
  import Item from "./Item.svelte";
  import Armor from "./Armor.svelte";
  import Craft from "./Craft.svelte";
  import CraftWeapon from "./CraftWeapon.svelte";
  import Unit from "./Unit.svelte";
  import Research from "./Research.svelte";
  import Manufacture from "./Manufacture.svelte";
  import Conditions from "./Conditions.svelte";
  import Ufo from "./Ufo.svelte";
  import Facility from "./Facility.svelte";
  import BaseService from "./BaseService.svelte";
  import BaseServices from "./BaseServices.svelte";
  import Commendation from "./Commendation.svelte";
  import MainTable from "./MainTable.svelte";
  import CanvasImage from "./CanvasImage.svelte";
  import { Link, LinksPage, Value, LinksList, Tr } from "./Components";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

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

    other = article.type_id == "OTHER" ? { BaseServices }[article.id] : false;

    if (query && false) {
      for (let word of query.split()) {
        let regEx = new RegExp(word, "ig");
        textwithHighlights = textwithHighlights.replace(
          regEx,
          "<span class='queried'>$&</span>"
        );
      }
    }
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
  <button class="page-turn" on:click={(e) => dispatch("prev")}>&lt;</button>
  <button class="page-turn" on:click={(e) => dispatch("next")}>&gt;</button>
</h1>

{#if article.id == "SERVICES"}
  <svelte:component this={BaseServices} />
{:else if article.type_id == "CONDITIONS"}
  <Conditions conditions={rul.startingConditions[article.id]} />
{:else if article.type_id == "CATEGORIES"}
  <LinksPage links={rul.categories[article.id]} />
{:else if article.type_id == "PEDIA" || article.type_id == "TYPE"}
  <LinksPage links={rul.sections[article.id].articles.map((a) => a.id)} />
{/if}

<div style="max-width:100%">
  <div class="main-flex">
    <svelte:component this={other} {query} />

    {#if article.id in rul.armors}
      <Armor armor={rul.armors[article.id]} text={textwithHighlights}/>
    {:else if article.id in rul.units && rul.units[article.id].armor}
      <Armor armor={rul.armors[rul.units[article.id].armor]} text={textwithHighlights} />
    {:else}
      {#if textwithHighlights}
        <div class="main-table main-text">
          {#if rul.items[article.id] && article.text}
            <div class="article-text-image">
              <CanvasImage item={rul.items[article.id]} zoom={2} />
            </div>
          {/if}

          {#if textwithHighlights}
            {@html textwithHighlights}
          {/if}
        </div>
      {/if}
    {/if}

    {#if article.id in rul.units}
      <Unit unit={rul.units[article.id]} />
    {/if}

    {#if article.id in rul.items}
      <Item item={rul.items[article.id]} />
    {/if}

    {#if article.id in rul.baseServices}
      <BaseService service={rul.baseServices[article.id]} />
    {/if}

    {#if article.id in rul.crafts}
      <Craft craft={rul.crafts[article.id]} />
    {/if}

    {#if article.id in rul.craftWeapons}
      <CraftWeapon weapon={rul.craftWeapons[article.id]} />
    {/if}

    {#if article.id in rul.ufos}
      <Ufo ufo={rul.ufos[article.id]} />
    {/if}

    {#if article.id in rul.facilities}
      <Facility facility={rul.facilities[article.id]} />
    {/if}

    {#if article.id in rul.manufacture}
      <Manufacture manufacture={rul.manufacture[article.id]} />
    {/if}

    {#if article.id in rul.research}
      <Research research={rul.research[article.id]} />
    {/if}

    {#if article.id in rul.soldierBonuses}
      <MainTable item={rul.soldierBonuses[article.id]} title="Bonuses" />
    {/if}

    {#if article.id in rul.eventScripts}
      <MainTable item={rul.eventScripts[article.id]} title="Event Script" />
      <!--{#each rul.eventScripts[article.id].relatedEvents as event}
        {#if event!=article.id}
          <MainTable item={rul.events[event]} title="Event" />
        {/if}        
      {/each}-->
    {/if}

    {#if article.id in rul.soldierTransformation    }
      <MainTable item={rul.soldierTransformation[article.id]} title="Transfomration" />      
    {/if}

    {#if article.id in rul.soldiers    }
      <MainTable item={rul.soldiers[article.id]} title="Soldiers" sort={{first:["statCaps"],last:["armors"]}}/>      
    {/if}

    {#if article.id in rul.races    }
      <MainTable item={rul.races[article.id]} title="Race" />      
    {/if}

    {#if article.id in rul.events}
      <MainTable item={rul.events[article.id]} title="Event" />
    {/if}

    {#if article.id in rul.commendations}
      <Commendation com={rul.commendations[article.id]} />
    {/if}

    <!--{#each article.lookup as researchId}
        <Research research={rul.research[researchId]} title={researchId} />
      {/each}-->

    {#if !(article.id in rul.units)}
      <Illustration id={article.image_id} />
    {/if}

    <div style="height:200px">&nbsp;</div>
  </div>
</div>
