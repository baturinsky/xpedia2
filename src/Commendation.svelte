<script>
  import { Value, MainTable, rul } from "./Components";
  import { Commendation } from "./Ruleset";

  export let com;
  let bonuses = [];

  $: {
    for (let i in com.soldierBonusTypes) {
      let bonus = com.soldierBonusTypes[i];
      bonuses[i] = { ...rul.soldierBonuses[bonus], criteria:{} };
      for (let criteria in com.criteria) {
        bonuses[i].criteria[criteria] = com.criteria[criteria][i]
      }
    }
  }
</script>

<MainTable
  item={com}
  title="Commendation"
  sort={{exclude: ["type", "criteria", "soldierBonusTypes"]}}
/>

<div class="no-break-column">
  {#each bonuses as bonus, i}
    <MainTable
      item={bonus}
      title="Stage"
      subtitle={`${i + 1}`}
    />
  {/each}
</div>
