<script>
  import { Tr } from "./Components";
  export let text;
</script>

<tr
  ><td colspan="2" class="table-subheader">
    <Tr s={text} />
  </td></tr
>
<tr>
  <td colspan="2" class="secondary-table-td">
    <slot></slot>
  </td>
</tr>
