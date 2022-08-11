<script>
  import { rul } from "./Ruleset";
  export let src = null;
  export let maxWidth = 1e6;
  export let maxHeight = 1e6;
  export let zoom = 1;
  export let item = null;

  let canvas;
  let ctx;
  let img = null;
  let loaded = false;

  function updateImage() {
    if (canvas == null) return;

    canvas.width = Math.min(maxWidth, img.naturalWidth * zoom);
    canvas.height = Math.min(maxHeight, img.naturalHeight * zoom);
    ctx.imageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.drawImage(img, 0, 0, img.naturalWidth * zoom, img.naturalHeight * zoom);
    loaded = true;
  }

  function prepareCanvas(node) {
    canvas = node;
    ctx = canvas.getContext("2d");
    img = new Image();
    img.onload = updateImage;
    img.src = src;
  }

  $: {
    if (item) {
      src = rul.sprite(item.sprite);
      maxWidth = 32 * item.invWidth;
      maxHeight = 32 * item.invHeight;
    }

    if (src && img) {
      loaded = false;
      img.src = src;
    }
  }
</script>

{#key src}
  <a href={src} class="canvas-image">
    <canvas
      class="pixelated"
      style="display:{loaded ? 'inline' : 'none'};"
      bind:this={canvas}
      use:prepareCanvas
    />
  </a>
{/key}
