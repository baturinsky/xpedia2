<script>
  export let src;
  export let maxWidth = 1e6;
  export let maxHeight = 1e6;
  export let zoom = 1;

  let div;

  function loaded(img) {
    div = img.parentNode;
    img.style.width = img.naturalWidth * zoom + "px";
    img.style.height = img.naturalHeight * zoom + "px";
    //div.style.width = Math.min(maxWidth, img.naturalWidth * zoom) + "px";
    div.style.height = Math.min(maxHeight, img.naturalHeight * zoom) + "px";
  }
</script>

<figure class="smrt">
  <img on:load={e => loaded(e.target)} {src} alt="X" onerror="this.onerror=null; this.src='xpedia/0.jpg'"/>
</figure>
