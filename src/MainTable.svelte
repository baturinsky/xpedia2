<script lang="ts">
  import { Value, rul } from "./Components";
  import { sortFirstLast, SortFirsLastOptions } from "./Ruleset";
  export let item;
  export let sort: SortFirsLastOptions = {};
  export let title: string;
  export let subtitle = "";
  let sorted;

  $: {
    console.log(item);
    if(!sort.exclude)
      sort.exclude = ["type", "name"];
    sorted = sortFirstLast(item, sort);
  }
</script>

{#if item == null}
  NULL
{:else}
  <table class="main-table">
    <tr>
      <td colspan="2" class="table-header"
        >{rul.tr(title)} {rul.tr(subtitle)}</td
      >
    </tr>
    {#each sorted.all as [key, prop]}
      <tr>
        <td><Value val={key} /></td><td>
          <Value val={prop} />
        </td>
      </tr>
    {/each}
  </table>
{/if}
