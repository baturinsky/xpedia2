<script>
  import { Value, rul } from "./Components";
  import { sortFirstLast } from "./Ruleset";
  export let entry;
  let sorted;

  $: {
    console.log(entry);
    sorted = sortFirstLast(entry, {
      first: ["stats", "armor", "canSurrender"],
      last: Object.keys(entry).filter((s) => s.indexOf("ound") != -1),
      exclude: ["type"],
    });
  }
</script>

<table class="main-table">
  <tr> <td colspan="2" class="table-header">{rul.tr("Unit")}</td> </tr>
  {#each sorted.all as [key, prop]}
    <tr>
      <td><Value val={key} simple={true}/></td><td>
        <Value val={prop} />
      </td>
    </tr>
  {/each}
</table>
