<script>
  import { rul } from "./Ruleset";
  import Value from "./Value.svelte";

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
              `<a href="##${type}">${rul.tr(type, {icon:"compact"})}</a>` + (power == 1 ? "" : "<sup>" + power + "</sup>"),
              b, type
            ]);
          }
        }
      } else {
        if (bonus[type] != 0) flat.push([`<a href="##${type}">${rul.tr(type, {icon:"compact"})}</a>`, bonus[type], type]);
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
  {#if b[2] == "flatHundred"}
    {b[1] * 100}
  {:else if b[2] == "flatOne"}
    {b[1]}
  {:else}  
    <nobr>{@html b[0]}{@html (b[1] != 1 ? `×<em>${b[1]}</em>` : "")}</nobr>
  {/if}
{/each}
