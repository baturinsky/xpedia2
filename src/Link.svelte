<script>
  import { rul } from "./Ruleset";
  import LinkNoTooltip from "./LinkNoTooltip.svelte";
  export let href
  
  $:{
    if(href && href.type)
      href = href.type
  }
</script>

{#if 'tip_' + href in rul.lang}
  <span tooltip={'tip_' + href}><LinkNoTooltip {href}/><sup class="tipmark">?</sup></span>
{:else}
  <LinkNoTooltip {href}/>
{/if}
