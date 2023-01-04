<script>
  import { rul } from "./Ruleset";
  import { emptyImg } from "./Components";

  export let id;
  export let left = false;
  //export let maxWidth = window.innerWidth > 1400 ? 640 : 320;
  //export let maxZoom = 4;
  export let style = "";

  function loaded(img) {}

  /*function loaded(img) {
    return;
    console.info(img);
    let zoom = Math.min(
      maxZoom,
      Math.max(1, Math.floor(maxWidth / img.naturalWidth))
    );
    img.width = img.naturalWidth * zoom;
    img.height = img.naturalHeight * zoom;
  }*/

  function noimage(img) {
    img.onerror = null;
    img.src = emptyImg;
    img.style.border = "none";
  }

</script>

{#if id && rul.sprite(id)}
  <div class="illustration">
    {#key id}
      <img
        style={style + (left ? "float:left" : "")}
        on:load={(e) => loaded(e.target)}
        on:error={(e) => noimage(e.target)}
        alt={id || ""}
        src={rul.sprite(id)}
      />
    {/key}
  </div>
{/if}
