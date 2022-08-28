<script>
  import { rul } from "./Ruleset";
  export let size, prop, bottom;
</script>

<div class="tight" style="columns:{size};width:{64 * size}px; margin-bottom:{bottom?-64*size:0}px;">
  {#each { length: size } as _, y}
    {#each { length: size } as _, x}
      {#await rul.obsSprite('base', prop * 1 + x * size + y) then data}
      <img
        class="facility sprite"
        onerror="this.onerror=null; this.src='xpedia/0.jpg'"
        alt="X"
        src={data} />
      {/await}
    {/each}
  {/each}
</div>