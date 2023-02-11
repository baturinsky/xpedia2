<script>
  import { rul, sortFirstLast, damageTypes } from "./Ruleset";
  import {
    Link,
    LinksPage,
    Value,
    LinksList,
    emptyImg,
    SpecialBonus,
    Tr,
  } from "./Components";
  import Subheader from "./Subheader.svelte";
  import RecoveryTable from "./RecoveryTable.svelte";

  export let entry;
  let dollColumns = 6;
  let seeAllVariants = false;
  let zoom = 1;
  let seeAlso = [];

  const imageNotFound = () => {
    this.onerror = null;
    console.warn(this.src + " not found");
    this.src = emptyImg;
  };

  $: {
    seeAlso = [];
    if (
      "storeItem" in entry &&
      entry.storeItem != "STR_NONE" &&
      entry.storeItem != entry.type
    ) {
      seeAlso.push(entry.storeItem);
    }
    if ("users" in entry) {
      for (let item of entry.users.filter(
        (s) =>
          s.substr(0, 8) != "INV_NULL" &&
          s != entry.type &&
          "##" + s != window.location.hash &&
          s != entry.type
      )) {
        seeAlso.push(item);
      }
    }
  }
</script>

<table class="main-table">
  <thead>
    <td colspan="2">
      <Tr s="Armor" />
      {#if seeAlso.length > 0}
        <span style="color:white">- see also</span>
        <LinksList items={seeAlso} />
      {/if}
    </td>
  </thead>
  <tr>
    <td colspan="2">
      <div class="armors">
        {#await entry.dollSprites() then sprites}
          {#if sprites}
            {#if Object.keys(sprites).length > 1}
              <p>
                <button
                  class="btn-hover-effect btn-hover-effect--effect-1"
                  on:click={(e) => (seeAllVariants = !seeAllVariants)}
                >
                  {seeAllVariants ? "Hide" : "See"} all variants
                </button>
              </p>
            {/if}

            {#each Object.keys(sprites).sort( (a, b) => rul.bodiesCompare( [a, b] ) ) as body, i}
              {#if seeAllVariants || i == 0}
                <div
                  class="armor"
                  style="left:{(i % dollColumns) * 80}px; top:{Math.floor(
                    i / dollColumns
                  ) * 120}px;"
                >
                  {#if seeAllVariants}
                    <div class="armor-variant">{body}</div>
                  {/if}
                  {#each sprites[body] as url, j}
                    <img
                      src={url}
                      alt={body}
                      onerror={imageNotFound}
                      class="armor-layer"
                    />
                  {/each}
                </div>
              {/if}
            {/each}
            <div
              style={`min-height:${
                seeAllVariants
                  ? (Math.floor(Object.keys(sprites).length / dollColumns) +
                      1) *
                    120
                  : 120
              }px;margin-left:175px;`}
            >
              {#if !seeAllVariants}
                <div class="flex-horisontal" style="max-width: 95vw;">
                  {#each ["stats", "armor"] as prop}
                    {#if entry[prop]}
                      <div class="armor-column">
                        <header><Tr s={prop} /></header>
                        {#each sortFirstLast(entry[prop]).all as [key, val], i}
                          <div>
                            <Value val={key} icon="monospace" />
                          </div>
                          <div>
                            {#if "recovery" == prop}
                              {#each Object.keys(val) as subfield, j}
                                {#if j != 0}
                                  <br />
                                {/if}
                                <Value val={subfield} />
                                :
                                <em>
                                  <Value val={val[subfield]} />
                                </em>
                              {/each}
                            {:else}
                              <em>
                                <Value {val} />
                              </em>
                            {/if}
                          </div>
                        {/each}
                      </div>
                    {/if}
                  {/each}
                </div>
              {/if}
            </div>
          {/if}
        {/await}
      </div>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <div class="flex-horisontal" style="max-width: 95vw;">
        <div class="armor-column armor-column-resists">
          <header><Tr s={"damageModifier"} /></header>
          {#each sortFirstLast(entry.damageModifier).all as [key, val], i}
            <div>
              <Value val={damageTypes[key]} icon="monospace" />
            </div>
            <div>
              <em>
                <span
                  style={`text-weight:bold; color:hsl(${~~(
                    val * 70
                  )}, 100%, 50%);`}>{~~(val * 100)}</span
                >
              </em>
            </div>
          {/each}
        </div>
      </div></td
    >
  </tr>

  {#each sortFirstLast( entry, { exclude: ["recovery", "type", "layersDefinition", "spriteFaceColor", "spriteHairColor", "spriteUtileColor", "spriteFaceGroup", "spriteHairGroup", "spriteUtileGroup", "customArmorPreviewIndex", "dollSprites", "layersDefaultPrefix", "frontArmor", "sideArmor", "rearArmor", "underArmor", "spriteInv", "armor", "damageModifier", "stats"], first: ["builtInWeapons", "size"] } ).all as [key, prop]}
    <tr>
      <td>
        <Value val={key} />
      </td>
      <td>
        {#if key == "damageModifier"}
          <table class="number-table">
            {#each prop as res, i}
              <tr>
                <td width="50%" class="number-table1">
                  {rul.damageTypeName(i)}
                </td>
                <td width="50%" class="number-table2">
                  {Math.round(res * 100)}%
                </td>
              </tr>
            {/each}
          </table>
        {:else if ["corpseBattle"].includes(key)}
          <Value val={prop[0]} />
        {:else if "spriteSheet" == key}
          <a href={rul.sprite(prop)}>{prop}</a>
        {:else if ["psiDefence", "meleeDodge"].includes(key)}
          <SpecialBonus bonus={prop} />
        {:else if ["builtInWeapons", "users", "units"].includes(key)}
          <Value val={prop.filter((s) => s.substr(0, 8) != "INV_NULL")} />
        {:else}
          <Value val={prop} />
        {/if}
      </td>
    </tr>
  {/each}
  <Subheader text="recovery" />
  <RecoveryTable recovery={entry.recovery} />
</table>
