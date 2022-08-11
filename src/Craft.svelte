<script>
  import { rul } from "./Ruleset";
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
  {#each Object.entries(entry).sort( (a, b) => (a[0] > b[0] ? 1 : -1) ) as [key, prop]}
    {#if !["type", "battlescapeTerrainData", "craftInventoryTile", "deployment"].includes(key)}
      <tr>
        <Value val={key} />
        <td>
          {#if ["weaponStrings"].includes(key)}
            <Value
              val={prop.map((slot) => rul.tr(slot).replace(">{ALT}{0}", ""))}
            />
          {:else if ["sprite"].includes(key)}
            <img
              class="craft sprite"
              on:error={() => {
                this.onerror = null;
                this.src = emptyImg;
              }}
              alt="X"
              src={rul.obsSprite("baseSprite", prop * 1 + 33)}
            />
          {:else if ["requiresBaseFunc"].includes(key)}
            <LinksList items={prop} />
          {:else}
            <Value val={prop} />
          {/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>
