<script>
  import { rul, sortFirstLast } from "./Ruleset";
  import { Link, LinksPage, Value, LinksList, emptyImg, SpecialBonus } from "./Components";

  export let armor;
  let dollColumns = 6;
  let seeAllVariants = false;
  let zoom = 1;
  let seeAlso = [];
  const imageNotFound = () => {
    this.onerror = null;
    console.log(this.src + " not found");
    this.src = emptyImg;
  };

  $: {
    console.log(armor);

    seeAlso = [];
    if (
      "storeItem" in armor &&
      armor.storeItem != "STR_NONE" &&
      armor.storeItem != armor.type
    ) {
      seeAlso.push(armor.storeItem);
    }
    if ("users" in armor) {
      for (let item of armor.users.filter(
        (s) =>
          s.substr(0, 8) != "INV_NULL" &&
          s != armor.type &&
          "##" + s != window.location.hash &&
          s != armor.type
      )) {
        seeAlso.push(item);
      }
    }
  }
</script>

<table class="main-table">
  <tr class="table-header">
    <td colspan="2">
      {rul.tl("Armor")}
      {#if seeAlso.length > 0}
        <span style="color:white">- see also</span>
        <LinksList items={seeAlso} />
      {/if}
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <div class="armors">
        {#if Object.keys(armor.dollSprites).length > 1}
          <p>
            <button
              class="btn-hover-effect btn-hover-effect--effect-1"
              on:click={(e) => (seeAllVariants = !seeAllVariants)}
            >
              {seeAllVariants ? "Hide" : "See"} all variants
            </button>
          </p>
        {/if}

        {#if armor.dollSprites}
          {#each Object.keys(armor.dollSprites).sort( (a, b) => rul.bodiesCompare( [a, b] ) ) as body, i}
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
                {#each armor.dollSprites[body] as url, j}
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
            style={"height:" +
              (seeAllVariants
                ? (Math.floor(
                    Object.keys(armor.dollSprites).length / dollColumns
                  ) +
                    1) *
                  120
                : 120) +
              "px"}
          />
        {/if}
      </div>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <div class="flex-horisontal" style="max-width: 95vw;">
        {#each ["armor", "damageModifier", "stats", "recovery"] as prop}
          {#if armor[prop]}
            <table class="number-table armor-column">
              <thead>
                <tr>
                  <td
                    colspan="2"
                    class="number-table-header"
                    style="text-align:center;"
                  >
                    <Value val={prop} />
                  </td>
                </tr>
              </thead>
              {#each sortFirstLast(armor[prop]).all as [key, val], i}
                {#if !(prop == "damageModifier" && val == 1)}
                  <tr>
                    <td>
                      {#if prop == "damageModifier"}
                        <Link href={rul.damageTypes[key]} />
                      {:else}
                        <Value val={key} />
                      {/if}
                    </td>
                    <td>
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
                          <Value
                            val={prop == "damageModifier"
                              ? Math.floor(val * 100)
                              : val}
                          />
                        </em>
                      {/if}
                    </td>
                  </tr>
                {/if}
              {/each}

              <!-- <tr
                ><td>
                  <img
                    src={Object.values(armor.dollSprites)[0][0]}
                    alt="0"
                    onerror={imageNotFound}
                    class="armor-layer"
                  /></td
                ></tr
              >-->
            </table>
          {/if}
        {/each}
      </div>
    </td>
  </tr>

  {#each Object.entries(armor).sort( (a, b) => (a[0] > b[0] ? 1 : -1) ) as [key, prop]}
    {#if !["recovery", "type", "layersDefinition", "spriteFaceColor", "spriteHairColor", "spriteUtileColor", "spriteFaceGroup", "spriteHairGroup", "spriteUtileGroup", "customArmorPreviewIndex", "dollSprites", "layersDefaultPrefix", "frontArmor", "sideArmor", "rearArmor", "underArmor", "spriteInv", "scripts", "armor", "damageModifier", "stats"].includes(key)}
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
          {:else if "psiDefence" == key}
            <SpecialBonus bonus={prop} />            
          {:else if ["builtInWeapons", "users", "units"].includes(key)}
            <Value val={prop.filter((s) => s.substr(0, 8) != "INV_NULL")} />
          {:else}
            <Value val={prop} />
          {/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>
