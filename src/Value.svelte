<script>
  import { rul } from "./Ruleset";
  import { Link, LinksList, Tr, Img  } from "./Components";
  
  export let val;
  export let obs = null;
  export let depth = 2;
  export let simple = false;
  export let nobr = 30;
  export let icon = null;
  export let key = null;
  export let capital = false;

  $:{
    if(obs){
      clog(rul.obsSprite(obs,val))
    }
  }
</script>

{#if depth == 0}
...
{:else if val == null}
‒
{:else if obs}
  {#await rul.obsSprite(obs,val) then data}
    <img src={data} alt={val} style="max-width:320px"/>
  {/await}
{:else if ["marker", "markerCrash", "markerLand"].includes(key)}          
    {#if rul.globeMarkers}
      <Img src={rul.globeMarkers[val]} style="transform: scale(2  );"/>
    {:else}
      {val}
    {/if}    
{:else if Array.isArray(val)}
  <LinksList items={val} vertical={false} />
{:else if val instanceof Object}
  <LinksList items={val}/>
{:else if val===true || val ===false}
  <span style="color:{val?'lime':'red'}"><Tr s={val.toString()}/></span>
{:else if !isNaN(+val)}
  <em class="num">{val.toLocaleString('ru-RU', {maximumFractionDigits: 4}).replace(",",".")}</em>
{:else if rul.article(val) && !simple}
  <Link href={val} {icon}/>
{:else if rul.hasSprite(val)}
  <Img src={val} style="max-width:320px"/>
{:else}
  <Tr s={val} {simple} {nobr} {icon} {capital}/>  
{/if}