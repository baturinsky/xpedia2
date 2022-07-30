<script>
  import { rul } from "./Ruleset";
  import LinksList from "./LinksList.svelte";
  import Link from "./Link.svelte";

  export let val;
</script>

{#if Array.isArray(val)}
  <LinksList items={val} vertical={false} />
{:else if val instanceof Object}
  <LinksList items={val}/>
{:else if val===true || val ===false}
  <span style="color:{val?'lime':'red'}">{rul.str(val.toString())}</span>
{:else if !isNaN(+val)}
  <em class="num">{val.toLocaleString()}</em>
{:else if rul.article(val)}
  <Link href={val}/>
{:else}
  {#if 'tip_' + val in rul.lang}
    <span tooltip={'tip_' + val}>{rul.tl(val)}<sup class="tipmark">?</sup></span>
  {:else}
    {rul.tl(val)}
  {/if}
  
{/if}