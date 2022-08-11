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
