<script>
  import { Value } from "./Components";
  import { sortFirstLast } from "./Ruleset";
  export let unit;
  let sorted;

  $: {
    console.log(unit);
    sorted = sortFirstLast(unit, {
      first: ["stats", "armor", "canSurrender"],
      last: Object.keys(unit).filter((s) => s.indexOf("ound") != -1),
      exclude: ["type"],
    });
  }
</script>

<table class="main-table">
  <tr> <td colspan="2" class="table-header">Unit</td> </tr>
  {#each sorted.all as [key, prop]}
    <tr>
      <td><Value val={key} /></td><td>
        {#if key == "builtInWeaponSets"}
          {#each prop as v, i}
            <div class={i==0?"":"top-border"}>
              <Value val={v} />
            </div>
          {/each}
        {:else}
          <Value val={prop} />
        {/if}
      </td>
    </tr>
  {/each}
</table>
