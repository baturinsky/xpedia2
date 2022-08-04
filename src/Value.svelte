<script>
  import { rul } from "./Ruleset";
  import { Link, LinksList, Tr  } from "./Components";

  export let val;
  export let depth = 2;
</script>

{#if depth == 0}
...
{:else if Array.isArray(val)}
  <LinksList items={val} vertical={false} />
{:else if val instanceof Object}
  <LinksList items={val}/>
{:else if val===true || val ===false}
  <span style="color:{val?'lime':'red'}"><Tr s={val.toString()}/></span>
{:else if !isNaN(+val)}
  <em class="num">{val.toLocaleString()}</em>
{:else if rul.article(val)}
  <Link href={val}/>
{:else if rul.sprite(val, true)}
  <img src={rul.sprite(val)} alt={val} style="max-width:320px"/>
{:else}
  {#if 'tip_' + val in rul.lang}
    <span tooltip={'tip_' + val}><Tr s={val}/><sup class="tipmark">?</sup></span>
  {:else}
    <Tr s={val}/>
  {/if}
  
{/if}