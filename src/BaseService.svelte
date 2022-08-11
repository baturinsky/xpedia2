<script>
  import { Value, LinksList } from "./Components";

  export let entry

</script>

<table class="main-table">

  {#each Object.entries(entry).sort((a, b) => (a[0]=="providedBy"?-10:10) + (a[0] > b[0] ? 1 : -1)) as prop}
    {#if !['id'].includes(prop[0])}
      <tr><td><Value val={prop[0]}/></td>
      <td><LinksList items={prop[1]}/></td></tr>
    {/if}
  {/each}

</table>
