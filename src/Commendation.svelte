<script>
  import { Value, MainTable, rul } from "./Components";
  import { Commendation } from "./Ruleset";

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

<MainTable
  entry={entry}
  title="Commendation"
  sort={{ exclude: ["type", "criteria", "soldierBonusTypes"] }}
/>

<div class="no-break-column">
  {#each bonuses as bonus, i (i)}
    <MainTable entry={bonus} title="Stage" subtitle={`${i + 1}`} />
  {/each}
</div>
