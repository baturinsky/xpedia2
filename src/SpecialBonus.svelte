<script>
  import { rul } from "./Ruleset";

  export let bonus;
  export let plus = false;

  function f(bonus) {
    if (!bonus) return [];
    let flat = [];
    for (let type of Object.keys(bonus)) {
      if (bonus[type].length) {
        for (let power in bonus[type]) {
          let b = bonus[type][power];
          if (b != 0) {
            power = power * 1 + 1;
            flat.push([
              rul.tr(type) + (power == 1 ? "" : "<sup>" + power + "</sup>"),
              b,
            ]);
          }
        }
      } else {
        if (bonus[type] != 0) flat.push([type, bonus[type]]);
      }
    }
    flat = flat.sort((a, b) => (a[0] == "flatHundred" || a[0] == "flatOne" || a[0] < b[0] ? -1 : 1));
    return flat;
  }

  let flat;

  $: {
    flat = f(bonus);
  }
</script>

{#if flat.length > 0 && plus}+{/if}
{#each flat as b, i}
  {#if i != 0}{" +"}{/if}
  {#if b[0] == "flatHundred"}
    {b[1] * 100}
  {:else if b[0] == "flatOne"}
    {b[1]}
  {:else}
    <nobr>{rul.tr(b[0])}{@html (b[1] != 1 ? `×<em>${b[1]}</em>` : "")}</nobr>
  {/if}
{/each}
