<script>
  import { rul, sortFirstLast, Sprite } from "./Ruleset";
  import { Value, LinksList, emptyImg } from "./Components";

  export let entry;

  $: {
    console.info(entry);
  }
</script>

<table class="main-table">
  <tr class="table-header">
    <td colspan="2">{rul.tr("Craft")}</td>
  </tr>
  {#each sortFirstLast(entry, {
      first:["speedMax","soldiers"],
      exclude:["type", "battlescapeTerrainData", "craftInventoryTile", "deployment"]
    }).all as [key, prop]}
    <tr>
      <td><Value val={key} /></td>
      <td>        
        {#if "weaponStrings" == key}
          <Value
            val={prop.map((slot) => rul.tr(slot).replace(">{ALT}{0}", ""))}
          />
        {:else if "sprite" == key}
          <Value obs="base" val={33 + prop}/>
          <Value obs="icon" val={prop + 11}/>
          <Value obs="icon" val={prop}/>
        {:else}
          <Value val={prop} />
        {/if}
      </td>
    </tr>
  {/each}
</table>
