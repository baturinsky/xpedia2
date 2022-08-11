<script>
  import { rul } from "./Ruleset";
  import { revealed } from "./store.ts";

  export let s;
  export let nobr = 100;

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
  if(tr?.length < nobr){
    tr = `<nobr>${tr}</nobr>`
  }
  revealed.subscribe((v) => (r = v));
</script>

{@html tr}
