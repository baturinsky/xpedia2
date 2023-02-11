<script>
  import { rul } from "./Ruleset";
  import { Link, LinksPage, Value, LinksList, Tr } from "./Components";

  export let query = null
</script>


<table class="main-table base-services">

  <tr class="table-header"><td><Tr s="Service"/></td><td><Tr s="Facility"/></td></tr>
  {#each rul.sortStrings(Object.keys(rul.baseServices)) as name}
    {@const items = rul.baseServices[name]}
    <tr class={name == query?"highlight":""}>
      <td><a class=".services" color=cyan href={'##' + name}><Tr s={rul.tr(name)}/></a></td>
      <td>
        <LinksList items={items.providedBy} />
      </td>
    </tr>
  {/each}

</table>
