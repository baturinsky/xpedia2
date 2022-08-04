<script>
  import { rul, sortFirstLast } from "./Ruleset";
  
  import { Link, LinksPage, Value, LinksList } from "./Components";
  import FacilitySprite from "./FacilitySprite.svelte";

  export let facility;
  let seeStorageTiles = false;
  let size = 1;

  $: {
    size = facility.size || 1;
    console.log(size);
    console.info(facility);
  }
</script>

<table class="main-table">
  <tr class="table-header">
    <td colspan="2">{rul.tr('Facility')}</td>
  </tr>
  {#each sortFirstLast(facility, {first:["spriteShape"], exclude:["spriteFacility"]}).all as [key, prop]}
    {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}
      <tr>
        <td class="padding-right">
          <Value val={key}/>
        </td>
        <td>
          {#if ['buildCostItems'].includes(key)}
            {#each Object.keys(prop).sort() as field, i}
              {#if i != 0}
                <br />
              {/if}
              <Link href={field} />
              : {prop[field].build} / {prop[field].refund}
            {/each}
          {:else if ['storageTiles'].includes(key)}
            <div>
              <div>
                <button
                  class="button"
                  on:click={e => (seeStorageTiles = !seeStorageTiles)}>
                  Expand
                </button>
              </div>
              <div>
                {#if seeStorageTiles}
                  <div style="columns:6">
                    <LinksList items={prop} vertical={true} />
                  </div>
                {/if}
              </div>
            </div>
          {:else if ['provideBaseFunc', 'requiresBaseFunc', 'forbiddenBaseFunc'].includes(key)}
            <LinksList items={prop} vertical={true} />
          {:else if ['spriteFacility', 'spriteShape'].includes(key)}
            {#if facility.spriteFacility}
              <FacilitySprite {size} {prop} bottom={true}/>
              <FacilitySprite {size} prop={facility.spriteFacility}/>
            {:else}
              <FacilitySprite {size} {prop}/>
            {/if}            
          {:else}
            <Value val={prop} />
          {/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>
