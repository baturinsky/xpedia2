<script>
  import { rul } from "./Ruleset";
  export let src = null;
  export let style;
  let alt = "image";
  $: {
    if(typeof src == "string"){
      alt = src;
      src = rul.sprite(src);
    }
  }
</script>

{#await src then data}
  <img alt={alt} {style} class="sprite" src={data}/>
{/await}
