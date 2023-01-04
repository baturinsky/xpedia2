<script>
  import { rul } from "./Ruleset";
  import { Link, LinksPage, Value } from "./Components";
  import Item from "./Item.svelte";

  export let entry;

</script>

<table class="main-table">
  <tr class="table-header">
    <td colspan="2">Weapon</td>
  </tr>
  {#each Object.entries(entry).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as prop}
    {#if !["type"].includes(prop[0])}
      <tr>
        <td class="padding-right">
          <Value val={prop[0]} />
        </td>
        <td>
          <Value val={prop[1]} />
        </td>
      </tr>
    {/if}
  {/each}
</table>
{#if entry.launcher}
  <Item
    entry={rul.items[entry.launcher]}
    title={"Launcher: " + rul.tr(entry.launcher)}
  />
{/if}
<!--{#if weapon.clip}
  <Item
    item={rul.items[weapon.clip]}
    title={"Clip: " + rul.tr(weapon.clip)}
  />
{/if}-->