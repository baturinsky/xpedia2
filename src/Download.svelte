<script>
  import {downloadPedia} from "./Components"
</script>

<!--<a href="data:text/plain;charset=utf-8,{encodeURIComponent(text)}" filename="Pedia">Download</a>-->
<button on:click={() => downloadPedia()}>Export</button>
