<script>
import { Value, MainTable, rul, tr, Tr, SpecialBonus, } from "./Components";
import LinksList from "./LinksList.svelte";
import RecoveryTable from "./RecoveryTable.svelte";
import { deedDescription, sortFirstLast } from "./Ruleset";
import SoldierBonuses from "./SoldierBonuses.svelte";
import {withoutKeys} from "./util"

  export let entry;
  let bonuses;

  $: {
    let buf = [];
    for (let i = 0; i < 10; i++) {
      let bonusName = entry.soldierBonusTypes ? entry.soldierBonusTypes[i] : null;
      let b = { ...(rul.soldierBonuses[bonusName] || {}), criteria: {} };
      for (let criteria in entry.criteria) {
        b.criteria[criteria] = entry.criteria[criteria][i];
      }
      if(Object.keys(b).length>0)
        buf[i] = b;
    }
    bonuses = buf;
  }
</script>

<MainTable let:key={key} let:prop={prop}
  entry={entry}
  title="Commendation"
  special={["killCriteria2", "finalBonus"]}
  sort={{last:["items"],  exclude: ["type", "criteria", "soldierBonusTypes", "battleTypes", "damageTypes", "kcd", "killCriteria"] }}
>
  {#if key=="killCriteria2"}
    {#if prop.length == 0}
      <Tr s="See stage descriptions"/>
    {:else}
      {@html prop.map(deeds=>deeds.map(deed=>deedDescription(deed)).join(` ${rul.tr("and")} `)).join(` ${rul.tr("or")}<br/>`) }
    {/if}
  {:else if key=="finalBonus"}
    <LinksList items={withoutKeys(prop, ["stats", "recovery", "id"])}/><br/>
    Stats: <Value val={prop?.stats}/> 
    {#if prop?.recovery}
      <br/>Recover per turn: 
      <table>
        <RecoveryTable recovery={prop.recovery}/>
      </table>
    {/if}
  {/if}
</MainTable>

<div class="no-break-column">
  {#each bonuses as bonus, i (i)}
    <SoldierBonuses entry={bonus} title="Stage" subtitle={`${i + 1}`} />
  {/each}
</div>
