<script>
  import { rul, sortFirstLast } from "./Ruleset";
  import {
    Link,
    Intro,
    LinksPage,
    Value,
    LinksList,
    BaseServiceList,
  } from "./Components";

  export let research;
  export let title = rul.tl("Research");
  let longLists = [
    "unlocks",
    "seeAlso",
    "requiresBaseFunc",
    "manufacture",
    "freeFrom",
    "dependencies",
    "leadsTo",
    "disables",
    "getOneFree",
    "getOneFreeProtected"
  ];

  //let sorted = sortFirstLast(research, {last:[]});

  $: {
    console.log(research);
  }
</script>

<table class="main-table">
  <tr class="table-header">
    <td colspan="2">{title}</td>
  </tr>
  {#each sortFirstLast( research, { last: longLists, exclude: ["name"] } ).all as [key, prop]}
    {#if longLists.includes(key) && prop && prop.length > 0}
      <tr
        ><td colspan="2" class="table-subheader" >
          {rul.tl(key)}
        </td></tr
      ><tr
        ><td colspan="2" class="centeredText">
          <LinksList items={prop} />
        </td></tr
      >
    {:else if ["requiresBaseFunc"].includes(key)}
      <BaseServiceList items={prop} vertical={true} />
    {:else if key == "getOneFreeProtected"}
      <tr><td colspan="2" class="table-subheader">{rul.tl(key)}</td></tr>
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
