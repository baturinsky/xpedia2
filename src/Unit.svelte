<script>
  import { Value, rul } from "./Components";
  import { sortFirstLast, Unit } from "./Ruleset";
  import MainTable from "./MainTable.svelte";
  import Armor from "./Armor.svelte"
  /**@type {Unit}*/
  export let entry;
</script>

<MainTable
  let:key
  let:prop
  title="Unit"
  {entry}
  sort={{
    first: ["stats", "armor", "canSurrender"],
    last: Object.keys(entry).filter((s) => s.indexOf("ound") != -1),
    exclude: ["type"],
  }}
/>

<Armor entry={rul.armors[entry.armor]}/>