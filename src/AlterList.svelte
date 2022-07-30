<script>
  import { rul } from "./Ruleset";
  import {Value, divider} from "./Components";

  export let items;

  console.log("alter ", items);
</script>

<tr>
  <td colspan="4" class="attacks-alter">
    <small>
      {#each Object.keys(items).sort() as field, i}
        {@html divider(i)}&nbsp;<nobr>
          <span tooltip={"tip_" + field}>
            {@html rul.tl(field)}
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
