<script>
  import { rul, sortFirstLast } from "./Ruleset";
  import { Link, LinksPage, Value, LinksList, Tr, invisible, divider } from "./Components";
  import { onMount } from "svelte";
  /**@type {any[]}*/
  export let entries;
  /**@type {list[]}*/
  export let fields;
  /**@type {list[]}*/
  export let extraFields = [];
  /**@type {list[]}*/
  let allFields;

  export let aId = "";

  let sorted;
  let sortField;
  let sortDescending = false;
  let extraField;

  function sortBy(field){    
    if(field){
      if(field != sortField){
        sortField = field;
        sortDescending = field=="id"?false:true;
      } else {
        sortDescending = !sortDescending;
      }
    }
    if(allFields.includes(field)){
      sorted = sorted.sort((a,b)=>((a.sortField(field)||0)>(b.sortField(field)||0)) == sortDescending?-1:1)
    }
  }

  function toggleField(field){
    if(allFields.includes(field)){
      allFields.splice(allFields.indexOf(field), 1);
    } else {
      allFields = [...allFields, field];
    }
    allFields = [...allFields];
  }

  $:{
    sorted = sorted || [...entries];
    allFields = allFields || ["id", ...fields];
  }
</script>

{#if extraFields}
  <div class="extra-fields">
    {#each [...fields, ...extraFields] as field, i}
      {@html divider(i)}
      <span class={"clickable " + (allFields.includes(field)?"on":"off")} on:click={()=>toggleField(field)}><Tr s={field}/></span>
    {/each}
  </div>
{/if}

<table class="section-table">
  <thead>
    {#each allFields as field}
      <td on:click={()=>sortBy(field)}><Tr s={field}/><span style="font-size:50%">{@html sortField!=field?invisible("▼"):sortDescending?"▼":"▲"}</span>
      </td>
    {/each}
  </thead>
  <tbody>
    {#each sorted as entry}
      <tr>
        {#each allFields as field}
          <td><Value val={entry.sortField(field, true)}/></td>
        {/each}  
      </tr>
    {/each}
  </tbody>
  
</table>