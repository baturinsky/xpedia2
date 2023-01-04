<script>
  import { rul, sortFirstLast } from "./Ruleset";
  import SpecialBonus from "./SpecialBonus.svelte";

  import { MainTable, Tr, Link, LinksPage, Value, emptyImg } from "./Components";

  export let entry;
  export let title;
  export let subtitle;

  $: {
    console.info(entry);
  }
</script>

<MainTable let:key={key} let:prop={prop} 
  sort={{first:["modSprite"], last:["battlescapeTarrainData"]}}
  {title} {subtitle}
  entry={entry}
>
</MainTable>
