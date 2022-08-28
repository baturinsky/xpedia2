<script>
  import { rul } from "./Ruleset";

  export let src = null;
  export let item = null;
  export let maxWidth = null;
  export let maxHeight = null
  /**@type {HTMLImageElement}*/
  let img;
  let alt;
 
  $: {
    if(typeof src == "string"){
      alt = src;
      src = rul.sprite(src);
    }
    if (item) {
      alt = item.id;
      src = rul.sprite(item.sprite);
      maxWidth = 32 * item.invWidth;
      maxHeight = 32 * item.invHeight;
    }
  }

  function resize(){
    img.style.width = `${img.naturalWidth*2}px`;
    img.style.height = `${img.naturalHeight*2}px`;
    console.log(maxWidth, maxHeight);
  }

</script>

{#await src then data}
<div style="display:inline-block; overflow:hidden; max-width:{maxWidth}px; max-height:{maxHeight}px;">
  <img bind:this={img} alt={alt} class="sprite" on:load={resize} src={data}/>
</div>
{/await}
