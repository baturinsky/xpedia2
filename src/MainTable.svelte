<script lang="ts">
  import { Value, rul } from "./Components";
  import { sortFirstLast, SortFirsLastOptions } from "./Ruleset";
  export let entry;
  export let sort: SortFirsLastOptions = {};
  export let title: string;
  export let subtitle = "";
  let sorted;

  $: {
    console.log(entry, sort);
    sorted = sortFirstLast(entry, sort);
  }
</script>

{#if entry == null}
  NULL
{:else}
  <table class="main-table">
    <tr>
      <td colspan="2" class="table-header"
        >{rul.tr(title)} {rul.tr(subtitle)}</td
      >
    </tr>
    {#each sorted.all as [key, prop]}
      {#if prop != []}
        <tr>
          <td><Value val={key} /></td><td>
            <Value val={prop} />
          </td>
        </tr>
      {/if}
    {/each}
  </table>
{/if}
