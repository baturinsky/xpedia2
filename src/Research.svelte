<script>
  import { rul, sortFirstLast } from "./Ruleset";
  import {
    Value,
    LinksList,
    BaseServiceList,
    Tr
  } from "./Components";

  export let entry;
  export let title = rul.tr("Research");
  let longLists = [
    "unlocks",
    "seeAlso",
    "allowsBuying",
    "freeFrom",
    "dependencies",
    "leadsTo",
    "disables",
    "getOneFree",
    "getOneFreeProtected",
    "requiresBaseFunc",
    "manufacture",
  ];

  //let sorted = sortFirstLast(research, {last:[]});

</script>

<table class="main-table">
  <thead>
    <td colspan="2">{title}</td>
  </thead>
  {#each sortFirstLast( entry, { last: longLists, exclude: ["name"] } ).all as [key, prop]}
    {#if longLists.includes(key) && prop && prop.length > 0}
      <tr
        ><td colspan="2" class="table-subheader" >
          <Tr s={key}/>
        </td></tr
      ><tr
        ><td colspan="2" class="centered-text">
          <LinksList items={prop} />
        </td></tr
      >
    {:else if ["requiresBaseFunc"].includes(key)}
      <BaseServiceList items={prop} vertical={true} />
    {:else if key == "getOneFreeProtected"}
      <tr><td colspan="2" class="table-subheader">{rul.tr(key)}</td></tr>
      {#each Object.keys(prop) as key}
        <tr><td><Value val={key} />:</td><td><LinksList items={prop[key]} /></td></tr
        >
      {/each}
    {:else}
      <tr>
        <td>
          <Value val={key} />
        </td>
        <td>
          <Value val={prop} />
        </td>
      </tr>
    {/if}
  {/each}
</table>
