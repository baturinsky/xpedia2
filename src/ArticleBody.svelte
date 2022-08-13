<script>
import { rul, Article } from "./Ruleset";
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
import {singular} from "./util"

export let text;
export let id;

let armor;
$:{
  armor = id in rul.armors?
    rul.armors[id] : 
  id in rul.units && rul.units[id].armor? 
    rul.armors[rul.units[id].armor]
    :null;
}

const renderers = {
  stats: {},
  elements: {},
  armors: Armor,
  units: Unit,
  items: Item,
  baseServices: BaseService,
  crafts: Craft,
  craftWeapons: CraftWeapon,
  ufos: Ufo,
  weaponTypes: {},
  facilities: Facility,
  soldierBonuses: {},
  eventScripts: {title:"Event Script"},
  soldierTransformation: {},
  soldiers: {sort:{first:["statCaps"],last:["armors"]}},
  alienRaces: {title:"Race"},
  events: {},
  missionScripts: {sort:{exclude:["researchNeeded", "researchForbidden"]}},
  alienMissions: {},
  startingConditions: {},
  enviroEffects: {},
  terrains: {},
  mapScripts: {},
  commendations: Commendation,
  manufacture: Manufacture,
  research: Research,
  alienDeployments: {sort:{first:["startingCondition","loot"]}},
}

</script>

{#if !armor && text}
  <div class="main-table main-text">
    {#if rul.items[id]?.sprite && text && rul.items[id].battleType != 2}
      <div class="article-text-image">
        <CanvasImage item={rul.items[id]} zoom={2}/>
      </div>
    {/if}

    {@html text}
  </div>
{/if}

{#each Object.entries(renderers).filter(([key])=>rul[key][id]) as [key, ren]}  
  {#if typeof ren == "function"}
    <svelte:component this={ren} entry={rul[key][id]} {text}/>
  {:else}
    <MainTable entry={rul[key][id]} sort={ren.sort} title={ren.title!=null?ren.title:singular(key)}/>
  {/if}
{/each}
