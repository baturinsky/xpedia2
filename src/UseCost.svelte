<script>
  import { rul, sortFirstLast, damageTypes } from "./Ruleset";
  import {Tr, Link, Value} from "./Components"
  export let cost;
  export let flatTime;
</script>

{#if cost}
  <nobr>
    <em>{cost.time}</em>
    {flatTime ? "" : "%"}
    <small><Tr s="TU"/></small>
  </nobr>
  {#each Object.keys(cost) as res}
    {#if res != "time" && cost[res] != 0}
      <br />
      <nobr>
        <Value val={cost[res]} /><small><Tr s={res}/></small>
      </nobr>
    {/if}
  {/each}
{/if}