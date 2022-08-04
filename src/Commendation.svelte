<script>
  import { Value, MainTable, rul } from "./Components";
  import { Commendation } from "./Ruleset";

  export let com;
  let bonuses;

  $: {
    let buf = [];
    for (let i = 0; i < 10; i++) {
      let bonusName = com.soldierBonusTypes ? com.soldierBonusTypes[i] : null;
      let b = { ...(rul.soldierBonuses[bonusName] || {}), criteria: {} };
      for (let criteria in com.criteria) {
        b.criteria[criteria] = com.criteria[criteria][i];
      }
      if(Object.keys(b).length>0)
        buf[i] = b;
    }
    console.log("buf", buf);
    bonuses = buf;
  }
</script>

<MainTable
  item={com}
  title="Commendation"
  sort={{ exclude: ["type", "criteria", "soldierBonusTypes"] }}
/>

<div class="no-break-column">
  {#each bonuses as bonus, i (i)}
    <MainTable item={bonus} title="Stage" subtitle={`${i + 1}`} />
  {/each}
</div>
