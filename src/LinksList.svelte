<script>
  import { Link, divider, LinksList, Value } from "./Components";
  import { rul } from "./Ruleset";

  export let items;
  export let cols = 0;
  export let vertical = false;
  export let numberTable = false;
  export let depth = 2;
  export let sorted;
  let sorter;

  if(sorted == null){
    sorted=items.length>9;
  }

  $: {
    if (items instanceof Set) {
      items = [...items];
    }
    sorter = sorted?a=>rul.sortStrings(a):a=>a;
  }
</script>

{#if items == null}
  {rul.tr("NULL")}
{:else if depth == 0}
  ...
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
          <Value val={subfield} depth={depth-1}/> :
      {/if}
      <div class="sublist">
        <Value val={items[subfield]} depth={depth-1}/>
      </div>
    </div>
  {/each}
{:else if items.length == null}
  <span class="links-list">
    {#each sorter(Object.keys(items)) as field, i}
    {@html divider(i, { vertical, cols })}‏‏‎<Value val={items[field]}  depth={depth-1}/>&nbsp;‎<Link href={field} />
    {/each}
  </span>
{:else if items.map}
  <span class="links-list">
    {#each sorter(items.map((i) => i?.type || i)) as item, i}
      {#if Array.isArray(item)}
        <div class="sublist">
          <LinksList items={item} depth={depth-1}/>
        </div>
      {:else}
        {@html divider(i, { vertical, cols })}<Link href={item} />
      {/if}
    {/each}
  </span>
{:else}
  {@debug items}
{/if}
