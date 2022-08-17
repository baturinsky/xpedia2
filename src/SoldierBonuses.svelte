<script>    
  import { Value, MainTable, rul, tr, Tr, SpecialBonus, } from "./Components";
  import RecoveryTable from "./RecoveryTable.svelte";
  import { deedDescription, sortFirstLast } from "./Ruleset";

  export let entry;
  export let title;
  export let subtitle;
</script>


<MainTable let:key={key} let:prop={prop} 
  {title} {subtitle}
  entry={entry}
  special={["recovery"]}
>
  <table>
    <RecoveryTable recovery={prop}/>
  </table>
</MainTable>