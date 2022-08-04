<script>
  import { Value, LinksList, tr } from "./Components";

  export let links;
  export let cols = false;
  export let title = null;
  let sorted = false;
  let sortedList;

  $: {
    //console.log("linkslist", links);
    sortedList = sorted
    ? links.slice().sort((a, b) => (tr(a) > tr(b) ? 1 : -1))
    : links;
  }
</script>

{#if links && links.length > 0}
  {#if !title}
    <div class="links-page-button">
      <button
        style={sorted ? "" : "text-decoration:line-through"}
        on:click={(e) => (sorted = !sorted)}
      >
        A-Z
      </button>
    </div>
  {/if}
  {#if title}
    <div class="links-page-header"><Value val={title}/></div>
  {/if}
  {#if cols}
    <div class="links-page">
      <div class="cols">
        <ol>
          {#each sortedList as option}
            <li>
              <Value val={option} />
            </li>
          {/each}
        </ol>
      </div>
    </div>
  {:else}
    <LinksList items={sortedList} sorted={false} />
  {/if}
{/if}
