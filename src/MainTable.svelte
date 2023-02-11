<script lang="ts">
  import { Value, rul } from "./Components";
  import { sortFirstLast, SortFirstLastOptions } from "./Ruleset";
  export let entry;
  export let sort: SortFirstLastOptions = {};
  export let title: string;
  export let subtitle = "";
  /** Fields that use custom renderer for the value*/
  export let special = [];
  /** Fields that use custom renderer for the both key and rendered*/
  export let wide = [];

  let sorted;

  $: {
    //clog("MT", entry, sort, wide);
    sorted = sortFirstLast(entry, sort);
  }
</script>

{#if entry == null}
  No entry in main table
{:else}
  <table class="main-table">
    <thead>
      <td colspan="2"
        ><Value val={title}/> <Value val={subtitle}/></td
      >
    </thead>
    {#each sorted.all as [key, prop]}
      <!-- svelte-ignore empty-block -->
      {#if key[0] == "_"}
      {:else if special.includes(key)}
      <tr>
        <td><Value val={key} capital={true}/></td><td>
          <slot {key} {prop}></slot>
        </td>
      </tr>          
      {:else if wide.includes(key)}
        <slot name="wide"></slot>
      {:else}
        {#if prop != null && !(prop.length == 0)}
          <tr>
            <td><Value val={key} capital={true}/></td><td>
              <Value val={prop} key={key}/>
            </td>
          </tr>
        {/if}
      {/if}
    {/each}
  </table>
{/if}

