<script>
  import { rul } from "./Ruleset";
  import { revealed } from "./store.ts";
  import { capital as toCap } from "./util";

  export let s;
  export let nobr = 100;
  export let capital = false;
  export let icon = "compact";

  let r = false;
  /**@type {string}*/
  let tr;
  $: {
    if (r) {
      tr = s;
    } else {
      tr = rul.tr(s, {icon});
    }

    if(capital && tr !=null){
      tr = toCap(tr);
    }

    if(tr?.length < nobr){
      tr = `<nobr>${tr}</nobr>`
    }  

  }


  revealed.subscribe((v) => (r = v));
</script>

{@html tr}
