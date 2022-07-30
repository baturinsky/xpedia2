<script>
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
  import CanvasImage from "./CanvasImage.svelte";
  import { Link, LinksPage, Value, LinksList } from "./Components";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let article;
  export let query;
  let textwithHighlights;
  let other = false;

  $: {
    textwithHighlights = article.text || "";

    if (textwithHighlights == "") {
      let lookup = rul.research[article.id]?.lookup;
      if (lookup) textwithHighlights = rul.tr(lookup);
    }

    other = article.type_id == "OTHER" ? { BaseServices }[article.id] : false;

    if (query) {
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
  <title>{rul.tl(article.title || "XPedia")}</title>
  {#if article.text}<meta
      property="og:description"
      content={article.text}
    />{/if}
  {#if article.image_id}<meta
      property="og:image"
      content={rul.sprite(article.image_id)}
    />{/if}
</svelte:head>

<h1>
  <nobr>{article.title || article.id}</nobr>
  <span style="flex:1" />
  <button class="page-turn" on:click={(e) => dispatch("prev")}>&lt;</button>
  <button class="page-turn" on:click={(e) => dispatch("next")}>&gt;</button>
</h1>

<div class="flex-horisontal">
  {#if rul.items[article.id]}
    <CanvasImage item={rul.items[article.id]} zoom="2" />
  {/if}

  {#if textwithHighlights}
    <div class="article-text">
      {@html textwithHighlights}
    </div>
  {/if}
</div>

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

    {#if article.id in rul.units}
      <Unit unit={rul.units[article.id]} />
    {/if}

    {#if article.id in rul.items}
      <Item item={rul.items[article.id]} text={textwithHighlights} />
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

    {#if article.id in rul.armors}
      <Armor armor={rul.armors[article.id]} />
    {:else if article.id in rul.units && rul.units[article.id].armor}
      <Armor armor={rul.armors[rul.units[article.id].armor]} />
    {/if}

    <!--{#each article.lookup as researchId}
        <Research research={rul.research[researchId]} title={researchId} />
      {/each}-->

    {#if !(article.id in rul.units)}
      <Illustration id={article.image_id} />
    {/if}
  </div>
</div>
