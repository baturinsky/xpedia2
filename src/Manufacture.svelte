<script>
  import { rul, sortFirstLast } from "./Ruleset";
  import { Link, LinksList, LinksPage, Value, Tr } from "./Components";
  import MainTable from "./MainTable.svelte";

  export let entry;
</script>

<MainTable {entry} sort={{exclude:["chanceSum", "totalProducedItems"]}} title="Manufacture" wide={["randomProducedItems"]}>
  <svelte:fragment slot="wide">
    <tr
      ><td colspan="2" class="table-subheader"
        ><Value val={"randomProducedItems"} /></td
      ></tr
    >
    <tr><td colspan="2">
      <table class="number-table" width="100%" style="margin:0px">
        {#each entry.randomProducedItems as chance}
          <tr><td>{((chance[0] / entry.chanceSum) * 100).toFixed(2)}%</td>
            <td>
              {#if Object.keys(chance[1]).length == 0}
                <Tr s="NOTHING" />
              {:else}
                <Value val={chance[1]} />
              {/if}
            </td>
          </tr>
        {/each}
      </table>
    </td></tr>
  </svelte:fragment>
</MainTable>

<!--
<table class="main-table">

<tr class="table-header">
  <td colspan="2">{rul.str("Manufacture")}</td>
</tr>

{#if "randomProducedItems" in entry}
  <tr
    ><td colspan="2" class="table-subheader"><Value val={"randomProducedItems"}/></td></tr
  >
  <tr
    ><td colspan="2">
      <table class="number-table" width="100%" style="margin:0px">
        {#each entry.randomProducedItems as chance}
          {#if Object.keys(chance[1]).length == 0}
            <tr><td colspan="2" style="text-align:center;">NOTHING</td></tr>
          {/if}
          {#each Object.keys(chance[1]).sort() as field, i}
            <tr><td>{chance[1][field]}</td><td><Link href={field} /></td></tr>
          {/each}
          <tr
            ><td
              colspan="2"
              style="text-align:center; border-bottom: solid 0.3px #382C44;"
              >×{chance[0]} / {(
                (chance[0] / entry.chanceSum) *
                100
              ).toFixed(3)}%</td
            ></tr
          >
        {/each}
      </table>
    </td></tr
  >
{/if}

{#each sortFirstLast(entry, {exclude:["randomProducedItems"]}).all as prop}
  <tr>
    <td class="padding-right">
      <Value val={prop[0]}/>
    </td>
    <td>
      <Value val={prop[1]} />
    </td>
  </tr>
{/each}
</table>
-->
