<script>
  import { rul } from "./Ruleset";
  import { revealed } from "./store.ts";

  export let s;
  let r = false;
  /**@type {string}*/
  let tr;
  $: {
    if (r) {
      tr = s;
    } else {
      tr = rul.tr(s);
      tr = tr?.replace(/^([\u1000-\uFFFF]+)/, "<div class='inem'>$1</div>");
    }
  }
  revealed.subscribe((v) => (r = v));
</script>

{@html tr}
