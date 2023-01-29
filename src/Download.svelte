<script>
  import {exportPedia} from "./exportPedia"
  import { Tr } from "./Components";
  export let title = "Export";
  export let onlyCurrent = false;
</script>

<!--<a href="data:text/plain;charset=utf-8,{encodeURIComponent(text)}" filename="Pedia">Download</a>-->
<button class="download" on:click={() => exportPedia(onlyCurrent)}><Tr s={title}/></button>
