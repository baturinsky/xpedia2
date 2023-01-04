<script>
  import {
    MainTable,
    Tr,
    Link,
    LinksPage,
    Value,
    emptyImg,
  } from "./Components";

  export let entry;
  export let title;
  export let subtitle;
  let entryTrimmed = {};
  let exclude = [];

  $: {
    exclude = [];
    for (let k of ["Craft", "SoldierTypes", "Vehicles", "Armors"]) {
      if (
        entryTrimmed[`allowed${k}`]?.length >
        entryTrimmed[`forbidden${k}`]?.length
      )
        exclude.push(`allowed${k}`);
      else exclude.push(`forbidden${k}`);
    }
  }
</script>

<MainTable
  let:key
  let:prop
  sort={{ first: ["deployments"], exclude, last: ["allowedArmors", "forbiddenArmors", "defaultArmor"] }}
  {title}
  {subtitle}
  {entry}
/>
