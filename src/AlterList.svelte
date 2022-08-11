<script>
  import { rul } from "./Ruleset";
  import {Value, Tr, divider} from "./Components";

  export let items;

</script>

<tr>
  <td colspan="4" class="attacks-alter">
    <small>
      {#each Object.keys(items).sort() as field, i}
        {@html divider(i)}&nbsp;<nobr>
          <span tooltip={"tip_" + field}>
            <Tr s={field}/>
            {#if "tip_" + field in rul.lang}
              <sup class="tipmark">?</sup>
            {/if}
            :
          </span>

          <Value val={items[field]} />

          {@html rul.lang[field + "_" + items[field]] || ""}
        </nobr>
      {/each}
    </small>
  </td>
</tr>
