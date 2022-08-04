<script>
  import { rul } from "./Ruleset";
  import { Tr  } from "./Components";
  export let href
</script>
  
{#if !isNaN(parseFloat(href))}
  <em>{href}</em>
{:else}
  <a href={'##' + href} class={rul.article(href)?"":"dead"} ><Tr s={href}/></a>  
{/if}