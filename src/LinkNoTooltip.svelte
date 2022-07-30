<script>
  import { rul } from "./Ruleset";
  export let href
</script>
  
{#if !isNaN(parseFloat(href))}
  <em>{href}</em>
{:else}
  <a href={'##' + href} class={rul.article(href)?"":"dead"} >{rul.tl(href)}</a>  
{/if}