<script>
  import { Value, MainTable, rul, tr, Tr, SpecialBonus, } from "./Components";
  import { sortFirstLast } from "./Ruleset";
  export let recovery;
</script>

{#each sortFirstLast(recovery).all as [key2, bonus], i}
  <!-- svelte-ignore component-name-lowercase -->
  <tr>
    <td>
      <Value val={key2} />
    </td>
    <td>
      <SpecialBonus {bonus} />
    </td>
  </tr>
{/each}