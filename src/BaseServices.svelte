<script>
  import { rul } from "./Ruleset";
  import { Link, LinksPage, Value, LinksList, Tl } from "./Components";

  export let query = null

  console.log(query);
</script>


<table class="main-table base-services">

  <tr class="table-header"><td><Tl s="Facility"/></td><td><Tl s="Service"/></td></tr>
  {#each Object.entries(rul.baseServices) as service}
    <tr class={service[0] == query?"highlight":""}>
      <td><a class=".services" color=cyan href={'##' + service[0]}>{@html rul.tl(service[0])}</a></td>
      <td>
        <LinksList items={service[1].providedBy} />
      </td>
    </tr>
  {/each}

</table>
