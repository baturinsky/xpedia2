<script>
  import { rul } from "./Ruleset";
  import Item from "./Item.svelte";
  import Armor from "./Armor.svelte";
  import Craft from "./Craft.svelte";
  import CraftWeapon from "./CraftWeapon.svelte";
  import Unit from "./Unit.svelte";
  import Research from "./Research.svelte";
  import Manufacture from "./Manufacture.svelte";
  import Facility from "./Facility.svelte";
  import BaseService from "./BaseService.svelte";
  import SoldierBonuses from "./SoldierBonuses.svelte";
  import Commendation from "./Commendation.svelte";
  import MainTable from "./MainTable.svelte";
  import StartingConditions from "./StartingConditions.svelte";
  import { onMount } from "svelte";

  export let text = null;
  export let id;

  let armor;
  $: {
    armor =
      id in rul.armors
        ? rul.armors[id]
        : id in rul.units && rul.units[id].armor
        ? rul.armors[rul.units[id].armor]
        : null;
  }

  onMount(()=>{
    if(rul.pageScripts[id])
      rul.pageScripts[id]();
  });

  const renderers = {
    units: Unit,
    armors: Armor,
    items: Item,
    battleTypes: {},
    research: Research,
    stats: {},
    damageTypes: {},
    countries: {},
    commendations: Commendation,
    baseServices: BaseService,
    facilities: Facility,
    manufacture: Manufacture,
    crafts: Craft,
    craftWeapons: CraftWeapon,
    weaponTypes: {},
    soldierBonuses: SoldierBonuses,
    soldierTransformation: {},
    soldiers: { sort: { first: ["statCaps"], last: ["armors"] } },
    ufos: { sort: { first: ["modSprite"], last: ["battlescapeTerrainData"] } },
    alienRaces: { title: "Race" },
    alienRanks: { title: "Ranks" },
    alienDeployments: {
      sort: { first: ["startingCondition", "loot"], last: ["data"] },
    },
    missionScripts: {
      sort: { exclude: ["researchNeeded", "researchForbidden"] },
    },
    alienMissions: {},
    startingConditions: StartingConditions,
    enviroEffects: {},
    terrains: { sort: { last: ["mapBlocks"] } },
    mapScripts: {},
    events: {},
    eventScripts: { title: "Event Script" },
    inventorySections: {},
  };
</script>

{#each Object.entries(renderers).filter(([key]) => rul[key][id]) as [key, ren]}
  {#if typeof ren == "function"}
    <svelte:component this={ren} entry={rul[key][id]} {text} />
  {:else}
    <MainTable
      entry={rul[key][id]}
      sort={ren.sort}
      title={ren.title != null ? ren.title : key}
    />
  {/if}
{/each}
