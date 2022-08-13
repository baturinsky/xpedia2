<script>
  import { Link, LinksPage, Value, LinksList, Tr, invisible, divider } from "./Components";
  import { get } from "svelte/store";
  import { onMount } from "svelte";

  /**@type {any[]}*/  export let entries;
  /**@type {any[]}*/  export let fields;
  /**@type {any[]}*/  export let extraFields = [];
  /**@type {any[]}*/  export let filters = [];
  /**@type {any[]}*/  let allFields;

  export let aId;
  let aIdLoaded;

  let filter;
  let sorted;
  let sortField;
  let sortDescending = false;

  onMount(()=>{
  })

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
      resort();
    }
  }

  function resort(){
    sorted = [...entries];
    if(filter)
      sorted = sorted.filter(a=>a.sortField(filter))
    sorted = sorted.sort((a,b)=>((a.sortField(sortField)||0)>(b.sortField(sortField)||0)) == sortDescending?-1:1);
  }

  function toggleField(field){
    if(allFields.includes(field)){
      allFields.splice(allFields.indexOf(field), 1);
    } else {
      allFields = [...allFields, field];
    }
    allFields = [...allFields];
  }
  function toggleFilter(field){
    if(field == filter){
      filter = null;
    } else {
      filter = field;
    }
    resort();
  }

  function moveField(field, after){
    let fi = allFields.indexOf(field);
    if(fi==-1)
      return;
    allFields.splice(fi,1);
    let ai = allFields.indexOf(after);
    if(ai==fi)
      ai++;
    if(ai==-1)
      ai = 0;
    allFields.splice(ai, 0, field);
    allFields = [...allFields];
  }

  $:{
    sorted = sorted || [...entries];
    if(aIdLoaded==null || aIdLoaded!=aId)
      loadFields();
    localStorage["xpediaColumnOrder"+aId] = allFields.join(",");
  }  

  function loadFields(){    
    let saved = localStorage["xpediaColumnOrder"+aId];
    allFields = saved?.split(",") || ["id", ...fields];
    aIdLoaded = aId;
  }
</script>

<p class="extra-fields">
  {#each [...fields, ...extraFields] as field, i}
    {@html divider(i)}
    <span class={"clickable " + (allFields.includes(field)?"on":"off")} on:click={()=>toggleField(field)}><Tr s={field}/></span>
  {/each}
</p>

{#if filters.length>0}
<p class="extra-fields">
  {#each filters as field, i}
    {@html divider(i)}
    <span class={"clickable " + (filter == field?"on":"off")} on:click={()=>toggleFilter(field)}><Tr s={field}/></span>
  {/each}
</p>  
{/if}

<table class="section-table">
  <thead>
    {#each allFields as field}
      <td 
        id = {"thead " + field}        
        draggable="true"
        on:dragstart={e=>e.dataTransfer.setData("field", field)}
        on:drop={e=>moveField(e.dataTransfer.getData("field"), field)}
        on:dragover = {e=>{e.preventDefault();e.dataTransfer.dropEffect = "move";}}
        on:click={()=>sortBy(field)}>
        <span style="font-size:50%">
          {@html invisible("▼")}
        </span>
        <Tr s={field}/>
        <span style="font-size:50%">
          {@html sortField!=field?invisible("▼"):sortDescending?"▼":"▲"}
        </span>
      </td>
    {/each}
  </thead>
  <tbody>
    {#each sorted as entry}
      <tr>
        {#each allFields as field}
          <td class="st-{field}"><Value nobr={20} val={entry.sortField(field, true)}/></td>
        {/each}  
      </tr>
    {/each}
  </tbody>
  
</table>