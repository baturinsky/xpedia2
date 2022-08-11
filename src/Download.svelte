<script>
  import {downloadPedia} from "./Components"
</script>

<!--<a href="data:text/plain;charset=utf-8,{encodeURIComponent(text)}" filename="Pedia">Download</a>-->
<button class="download" on:click={() => downloadPedia()}>Export</button>
