<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";
  
  export let items
  export let vertical=false
</script>

{#each items as item, i}
  {@html i==0?"":(vertical?"</br>":", ")}
  <Link href={item}/>
{/each}
