<script>
  import { rul } from "./Ruleset";
  import { revealed } from "./store.ts";

  export let s;
  let r = false;
  revealed.subscribe((v)=>r=v)
</script>

{@html r?s:rul.tr(s)}
