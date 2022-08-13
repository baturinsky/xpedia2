<script>
  import { rul, sortFirstLast } from "./Ruleset";
  import SpecialBonus from "./SpecialBonus.svelte";

  import { Link, LinksPage, Value } from "./Components";

  export let entry;

  $: {
    console.info(entry);
  }
</script>

<table class="main-table">
  <tr class="table-header"> <td colspan="2">Craft</td> </tr>
  {#each sortFirstLast( entry, { last: ["raceBonus", "type", "battlescapeTerrainData", "craftInventoryTile", "deployment"] } ).all as [key, prop]}
    <tr>
      <td class="padding-right">{@html rul.tr(key)}</td>
      <td>
        {#if ["modSprite"].includes(key)}
          <img
            class="sprite"
            alt="X"
            src={rul.sprite(prop)}
            onerror="this.onerror=null; this.src='xpedia/0.jpg'"
          />
        {:else}
          <Value val={prop} />
        {/if}
      </td>
    </tr>
  {/each}
  {#if entry.raceBonus}
  <tr><td colspan="2">
    <table class="number-table">
      <tr><td colspan="2">{rul.tr("raceBonus")}</td><td></td>
      {#each Object.keys(entry.raceBonus).sort() as field, i}
        <tr><td>{rul.tr(field)}</td><td>
            {#each Object.keys(entry.raceBonus[field]).sort() as field2, i2}
              {rul.tr(field2)}:&nbsp;<em
                ><Link href={entry.raceBonus[field][field2]} /></em
              ><br />
            {/each}
          </td></tr
        >
      {/each}
    </table>
  </td></tr>
  {/if}
</table>
