<script>
  import { rul } from "./Ruleset";
  import { revealed } from "./store.ts";

  export let s;
  export let nobr = 30;
  export let capital = false;
  export let icon = "compact";

</script>

{@html $revealed?s:rul.tr(s, {icon, capital, nobr})}