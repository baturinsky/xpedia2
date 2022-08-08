<script>
  import { rul, sortFirstLast } from "./Ruleset";
  import SpecialBonus from "./SpecialBonus.svelte";
  import Link from "./Link.svelte";
  import CanvasImage from "./CanvasImage.svelte";
  import Value from "./Value.svelte";
  import AlterList from "./AlterList.svelte";

  export let item;
  let title;
  let attacks;
  let sorted;
  let anal = false;

  function soundsFrom(sounds) {
    if (!sounds) return [];
    if (!sounds.length) sounds = [sounds];
    return sounds.map((s) => rul.sounds[s]).filter((s) => s);
  }

  $: {
    attacks = item.attacks().slice();
    title =
      (item.battleType ? rul.tr("battleType" + item.battleType) + " " : "") +
      rul.tr("Item");

    if (item.compatibleAmmo)
      for (let ammoId of item.compatibleAmmo) {
        let ammo = rul.items[ammoId];
        let ammoAttack = ammo.attacks()[0];
        attacks.push(ammoAttack);
      }

    sorted = sortFirstLast(item, {
      first: [
        "costBuy",
        "costSell",
        "monthlySalary",
        "invHeight",
        "invWidth",
        "weight",
        "size",
        "isConsumable",
        "maxRange",
        "medikitTargetSelf",
        "medikitType",
        "stimulant",
        "stunRecovery",
        "dropoff",
        "costPrime",
        "costUnprime",
        "twoHanded",
        "blockBothHands",
        "oneHandedPenalty",        
        "kneelBonus",
        "blastRadius",
        "requires",
        "categories",
        "armors",
        "compatibleWeapons",
        "compatibleAmmo",
        "clipSize",
        "liveAlien",
        "recover",
        "prisonType",
        "manufacture",
        "componentOf",
      ],
      exclude: [
        "requiresBuy",
        "sprite",
        "type",
        "ammo",
        "_attacks",
        "damageAlter",
        "accuracyMelee",
        "accuracyMultiplier",
        "accuracySnap",
        "costAuto",
        "costMelee",
        "costSnap",
        "damageBonus",
        "damageType",
      ],
    });
    console.info(attacks);
  }

  console.info(item);
</script>

<table class="main-table">
  <tr class="table-header">
    <td colspan="2">{title}</td>
  </tr>
  {#if (item.sprite && item.sprite != "Resources/Blanks/Blank.png") || attacks.length > 0}
    <tr>
      <td colspan="2" class="td-attacks-table">
        <div>
          {#if attacks.length > 0}
            <table class="attacks-table">
              <thead>
                {#if item.battleType == 2}
                  <td colspan="3" />
                {:else}
                  <td>{rul.tr("mode")}</td>
                  <td>{rul.tr("accuracy")}</td>
                  <td>{rul.tr("cost")}</td>
                {/if}
                <td>{rul.tr("damage")}</td>
              </thead>
              {#each attacks as attack}
                <tr>
                  {#if attack.mode == "ammo"}
                    <td class="item-ammo-img">
                      <CanvasImage
                        src={rul.sprite(attack.item.sprite)}
                        maxWidth={32 * attack.item.invWidth}
                        maxHeight={32 * attack.item.invHeight}
                        zoom="2"
                      />
                      <!--<img class="sprite" use:ammoSprite style="position:relative;" alt="X" src={rul.sprite(attack.item.sprite)}/>-->
                    </td>
                    <td colspan="2">
                      <Link href={attack.item.type} />
                      <br />
                      <small>
                        {rul.tr("Shots")}: {attack.item.clipSize}
                        {rul.tr("Wgt")}: {attack.item.weight}
                      </small>
                    </td>
                  {:else}
                    <td>
                      {rul.str(attack.name)}{attack.shots == 1
                        ? ""
                        : "×" + attack.shots}
                    </td>
                    <td>
                      <em class="big-number">{attack.accuracy}</em>{"%"}
                      {#if attack.range}
                        {@html rul
                          .str("at !N! m")
                          .replace("!N!", `<em>${attack.range}</em>`)}
                      {/if}<br/>
                      <SpecialBonus bonus={attack.accuracyMultiplier} />
                    </td>
                    <td>
                      <nobr>
                        <em>{attack.cost.time}</em>
                        {attack.flatTime ? "" : "%"}
                        <small>{rul.str("TU")}</small>
                      </nobr>
                      {#each Object.keys(attack.cost) as res}
                        {#if res != "time" && attack.cost[res] != 0}
                          <br />
                          <nobr>
                            <Value val={attack.cost[res]} />
                            <small>{rul.str(res)}</small>
                          </nobr>
                        {/if}
                      {/each}
                    </td>
                  {/if}
                  <td>
                    {#if "damage" in attack || "damageType" in attack}
                        {attack.pellets > 1 && attack.damageBonus ? "(" : ""}
                        <em>{attack.damage || 0}</em>
                        <small>
                          <SpecialBonus
                            plus={true}
                            bonus={attack.damageBonus}
                          />
                          {attack.pellets > 1 && attack.damageBonus ? ")" : ""}
                        </small>
                        {attack.pellets > 1 ? " ×" + attack.pellets : ""}
                      <br />
                      {#if attack.damageType}
                        <Link href={rul.damageTypes[attack.damageType]} />
                      {/if}
                    {/if}
                  </td>
                </tr>

                {#if attack.mode == "melee" && item.meleeAlter}
                  <AlterList items={item.meleeAlter} />
                {/if}

                {#if attack.mode == "ammo" && attack.alter}
                  <AlterList items={attack.alter} />
                {/if}
              {/each}
              {#if item.damageAlter && item.battleType != 2}
                <AlterList items={item.damageAlter} />
              {/if}
            </table>
          {/if}
        </div>
      </td>
    </tr>
  {/if}

  {#each anal ? [...sorted.first, ["anal"], ...sorted.misc] : [...sorted.first, ["anal"]] as [key, prop]}
    {#if key == "anal"}
      {#if sorted.misc.length > 0}
        <tr>
          <td colspan="2">
            <button
              class="btn-hover-effect btn-hover-effect--effect-1"
              on:click={(e) => (anal = !anal)}
            >
              {anal ? "Hide" : "See"} details
            </button>
          </td>
        </tr>
      {/if}
    {:else}
      <tr>
        <td><Value val={key} /></td>
        <td class="item-right-column">
          {#if ["manufacture"].includes(key)}
            {#each Object.keys(prop) as man, i}
              <div class={i > 0 && "top-border"}>
                <Value val={man} />:
                <Value val={rul.manufacture[man]?.requiredItems || ""} /> →
                <Value val={rul.manufacture[man]?.producedItems || ""} />
              </div>
            {/each}
          {:else if ["damageBonus", "meleeBonus", "accuracyMultiplier", "meleeMultiplier", "closeQuartersMultiplier"].includes(key)}
            <SpecialBonus bonus={prop} />
          {:else if ["damageType", "meleeType"].includes(key)}
            {rul.damageTypeName(prop)}
          {:else if key == "battleType"}
            {prop}: {rul.tr("battleType" + prop)}
          {:else if key.includes("Sound")}
            {#each soundsFrom(prop) as sound, i}
              {@html i > 0 ? "<br/>" : ""}
              <audio controls src={sound}>Audio tag not working</audio>
            {/each}
          {:else if ["floorSprite", "handSprite"].includes(key)}
            <a style="vertical-align:top" href={rul.obsSprite(key, prop)}>
              {prop}
            </a>
            <img
              class="item-img sprite"
              alt={prop}
              src={rul.obsSprite(key, prop)}
            />
          {:else if key == "prisonType"}
            <Link href={"prisonType" + prop} />
          {:else if key == "costBuy"}
            <Value val={prop} /> <Value val={item.requiresBuy || ""} />
          {:else}
            <Value val={prop} />
          {/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>
