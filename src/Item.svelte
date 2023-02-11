<script>
  import {
    rul,
    sortFirstLast,
    damageTypes,
    internalBattleTypes,
  } from "./Ruleset";
  import { Tr, Link, Value } from "./Components";
  import SpecialBonus from "./SpecialBonus.svelte";
  import CanvasImage from "./CanvasImage.svelte";
  import AlterList from "./AlterList.svelte";
  import UseCost from "./UseCost.svelte";
  import SecondaryTable from "./SecondaryTable.svelte";
  import Damage from "./Damage.svelte";

  /**@type {typeof import("./Ruleset").Item}*/
  export let entry;
  let title;
  let attacks;
  let sorted;
  let anal = false;

  let hand1bonus;

  function soundsFrom(sounds) {
    if (!sounds) return [];
    if (!sounds.length) sounds = [sounds];
    return sounds.map((s) => rul.sounds[s]).filter((s) => s);
  }

  $: {
    clog(entry);
    attacks = entry.attacks().slice();
    let ohpen = entry.oneHandedPenalty || entry.battleType == 3 ? 67 : 50;

    hand1bonus = entry.twoHanded
      ? entry.blockBothHands
        ? rul.tr("2handOnly")
        : `${rul.tr("1handPenalty")} ${ohpen}%`
      : "";

    if (entry.compatibleAmmo)
      for (let ammoId of entry.compatibleAmmo) {
        let ammo = rul.items[ammoId];
        let ammoAttack = ammo.attacks()[0];
        attacks.push(ammoAttack);
      }

    sorted = sortFirstLast(entry, {
      first: [
        "fixedWeapon",
        "builtIn",
        "costBuy",
        "costSell",
        "tuUse",
        "monthlySalary",
        "monthlyMaintenance",
        "size",
        "isConsumable",
        "medikitTargetSelf",
        "medikitType",
        "stimulant",
        "stunRecovery",
        "costUnprime",
        "blastRadius",
        "requires",
        "categories",
        "armors",
        "compatibleWeapons",
        "liveAlien",
        "recover",
        "energyRecovery",
        "healthRecovery",
        "experienceTrainingMode",
        "prisonType",
        "powerRangeReduction",
        "powerRangeThreshold",
        "commendations",
        "loot",
        "ufos",
        "terrains",
        "spawnUnit",
        "manufacture",
        "componentOf",
      ],
      exclude: [
        "requiresBuy",
        "sprite",
        "type",
        "compatibleAmmo",
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
  }
</script>

<table class="main-table">
  <thead>
    <td colspan="2">
      {entry.weight ? entry.weight + rul.tr("kg") : ""}
      {entry.invSize}
      {entry.clipSize > 0 ? entry.clipSize + rul.tr("-shot") : ""}
      <Link href={entry.internalBattleType} />
      <Tr s="Item" />
    </td>
  </thead>
  {#if (entry.sprite && entry.sprite != "Resources/Blanks/Blank.png") || attacks.length > 0}
    <tr>
      <td colspan="2" class="td-attacks-table">
        <div>
          {#if attacks.length > 0}
            <table class="attacks-table">
              <thead>
                {#if entry.battleType == 2}
                  <td colspan="3" />
                {:else}
                  <td><Tr s="mode" /></td>
                  <td>
                    <Tr s="accuracy" />
                    <Tr s="kneeling" />
                    {entry.kneelBonus || 120}% -{entry.dropoff}/<Tr
                      s="accPerTile"
                    />
                    {@html hand1bonus}
                  </td>
                  <td><Tr s="cost" /></td>
                {/if}
                <td><Tr s="damage" /></td>
              </thead>
              {#each attacks as attack}
                <tr>
                  {#if attack.mode == "ammo"}
                    <td class="item-ammo-img">
                      <CanvasImage
                        src={attack.item.sprite}
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
                          .str("up to !N! m")
                          .replace(
                            "!N!",
                            `<em class="${
                              attack.range == entry.maxRange ? "bad" : ""
                            }">${entry.minRange ? entry.minRange + "-" : ""}${
                              attack.range
                            }</em>`
                          )}
                      {/if}<br />
                      <SpecialBonus bonus={attack.accuracyMultiplier} />
                    </td>
                    <td>
                      <UseCost cost={attack.cost} flatTime={attack.flatTime} />
                      {#if entry.costPrime}
                        <div>
                          <Tr s="Prime:" />
                          <UseCost cost={entry.costPrime} />
                        </div>
                      {/if}
                    </td>
                  {/if}
                  <td>
                    <Damage {attack} />
                  </td>
                </tr>

                {#if attack.mode == "melee" && entry.meleeAlter}
                  <AlterList items={entry.meleeAlter} />
                {/if}

                {#if attack.mode == "ammo" && attack.alter}
                  <AlterList items={attack.alter} />
                {/if}
              {/each}
              {#if entry.damageAlter && entry.battleType != 2}
                <AlterList items={entry.damageAlter} />
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
    {:else if key == "manufacture"}
      <SecondaryTable text={key}>
        <table class="item-manufacture">
          {#each prop as man, i}
            {@const m = rul.manufacture[man]}
            <tr>
              <td colspan="3" style="text-align: left;">
                <Value val={man} />
                {#if m?.requiresBaseFunc}
                  / <Value val={m?.requiresBaseFunc} />
                {/if}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">
                <Value val={m?.requiredItems || ""} />
                {#if m?.cost}$<Value val={m?.cost} />{/if}
                ⌛<em><Value val={m?.time} /></em>
              </td>
              <td>➔</td>
              <td style="text-align: left;">
                <Value val={m?.totalProducedItems[entry.id]} />&nbsp;<Value
                  val={entry.id}
                />
              </td>
            </tr>
          {/each}
        </table>
      </SecondaryTable>
    {:else if key == "componentOf"}
      <SecondaryTable text={key}><Value val={prop} /></SecondaryTable>
    {:else}
      <tr>
        <td><Value val={key} capital={true} /></td>
        <td class="item-right-column">
          {#if ["damageBonus", "meleeBonus", "accuracyMultiplier", "meleeMultiplier", "closeQuartersMultiplier"].includes(key)}
            <SpecialBonus bonus={prop} />
          {:else if ["damageType", "meleeType"].includes(key)}
            {rul.damageTypeName(prop)}
          {:else if key == "battleType"}
            {prop}: {rul.tr(internalBattleTypes[prop])}
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
          {:else if key == "experienceTrainingMode"}
            <Value val={prop} />: <Tr s={"experienceTrainingMode" + prop} />
          {:else if key == "costBuy"}
            <Value val={prop} /> <Value val={entry.requiresBuy || ""} />
          {:else}
            <Value val={prop} />
          {/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>
