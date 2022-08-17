<script>
  import { rul } from "./Ruleset";
  import { revealed } from "./store.ts";

  export let s;
  export let nobr = 30;
  export let capital = false;
  export let icon = "compact";

  let rev = true;
  
  /**@type {string}*/
  let tr;
  $: {
    tr = rev?s:rul.tr(s, {icon, capital, nobr});
  }

  revealed.subscribe((v) => (rev = v));
</script>

{@html tr}