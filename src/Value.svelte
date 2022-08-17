<script>
  import { rul } from "./Ruleset";
  import { Link, LinksList, Tr  } from "./Components";

  export let val;
  export let obs = null;
  export let depth = 2;
  export let simple = false;
  export let nobr = 100;
  export let icon = null;
  export let capital = false;

  $:{
    if(obs){
      console.log(rul.obsSprite(obs,val))
    }
  }
</script>

{#if depth == 0}
...
{:else if val == null}
‒
{:else if obs}
  <img src={rul.obsSprite(obs,val)} alt={val} style="max-width:320px"/>
{:else if Array.isArray(val)}
  <LinksList items={val} vertical={false} />
{:else if val instanceof Object}
  <LinksList items={val}/>
{:else if val===true || val ===false}
  <span style="color:{val?'lime':'red'}"><Tr s={val.toString()}/></span>
{:else if !isNaN(+val)}
  <em class="num">{val.toLocaleString()}</em>
{:else if rul.article(val) && !simple}
  <Link href={val} {icon}/>
{:else if rul.sprite(val, true)}
  <img src={rul.sprite(val)} alt={val} style="max-width:320px"/>
{:else}
  {#if 'tip_' + val in rul.lang}
    <span tooltip={'tip_' + val}><Tr s={val}/><sup class="tipmark">?</sup></span>
  {:else}
    <Tr s={val} {simple} {nobr} {icon} {capital}/>
  {/if}
  
{/if}