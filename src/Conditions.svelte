<script>
  import { rul, sortFirstLast } from "./Ruleset";
  import LinksPage from "./LinksPage.svelte";  

  export let conditions;
</script>

{#each sortFirstLast(conditions, {exclude:["type"]}).all as [key, prop]}
  <LinksPage links={prop} title={rul.tr(key)}/>
{/each}