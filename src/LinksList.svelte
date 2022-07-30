<script>
  import { filter } from "jszip";

  import { Link, divider, LinksList, Value } from "./Components";
  import { rul } from "./Ruleset";

  export let items;
  export let cols = 0;
  export let vertical = false;
  export let numberTable = false;

  $: {
    let a = (Object.values(items) || []).some((a) => typeof a == "object");
    //debugger;
    if (items instanceof Set) {
      items = [...items];
    }
  }
</script>

{#if items == null}
  {rul.tl("NULL")}
{:else if cols}
  <div class="cols" style={`columns:${cols};`}>
    {#each items as field, i}
      <div><Link href={field} /></div>
    {/each}
  </div>
{:else if numberTable}
  <table class="number-table">
    {#each Object.keys(items).sort() as field, i}
      <tr>
        <td>
          <Link href={field} />
        </td>
        <td>
          <em><Link href={items[field]} /></em>
        </td>
      </tr>
    {/each}
  </table>
{:else if (Object.values(items) || []).some((a) => typeof a == "object")}
  {#each Object.keys(items) as subfield, j}
    <div class={j > 0 && "top-border"}>
      {#if !Array.isArray(items)}
        <Value val={subfield} /> :
      {/if}
      <Value val={items[subfield]} />
    </div>
  {/each}
{:else if items.length == null}
  <span class="links-list">
    {#each rul.sortStrings(Object.keys(items)) as field, i}
      {@html divider(i, { vertical, cols })}‏‏‎‎<nobr
        ><Value val={items[field]} /> <Link href={field} /></nobr
      >
    {/each}
  </span>
{:else}
  <span class="links-list">
    {#each rul.sortStrings(items.map((i) => i.type || i)) as item, i}
      {#if Array.isArray(item)}
        <LinksList items={item} />
      {:else}
        {@html divider(i, { vertical, cols })}<Link href={item} />
      {/if}
    {/each}
  </span>
{/if}
