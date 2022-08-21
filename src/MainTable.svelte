<script lang="ts">
  import { Value, rul } from "./Components";
  import { sortFirstLast, SortFirsLastOptions } from "./Ruleset";
  export let entry;
  export let sort: SortFirsLastOptions = {};
  export let title: string;
  export let subtitle = "";
  export let special = [];
  export let wide = [];

  let sorted;

  $: {
    console.log("MT", entry, sort, wide);
    sorted = sortFirstLast(entry, sort);
  }
</script>

{#if entry == null}
  No entry in main table
{:else}
  <table class="main-table">
    <thead>
      <td colspan="2"
        >{@html rul.tr(title)} {@html rul.tr(subtitle)}</td
      >
    </thead>
    {#each sorted.all as [key, prop]}
      {#if special.includes(key)}
      <tr>
        <td><Value val={key} /></td><td>
          <slot {key} {prop}></slot>
        </td>
      </tr>          
      {:else if wide.includes(key)}
        <slot name="wide"></slot>
      {:else}
        {#if prop != null && !(prop.length == 0)}
          <tr>
            <td><Value val={key} /></td><td>
              <Value val={prop} />
            </td>
          </tr>
        {/if}
      {/if}
    {/each}
  </table>
{/if}

