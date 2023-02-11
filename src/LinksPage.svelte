<script>
  import { Value, Link, LinksList, tr, Tr } from "./Components";
  import {linksPageSorted} from "./store"
  import PaginatedList from "./PaginatedList.svelte"
  import { onDestroy } from "svelte";

  export let links;
  export let cols = false;
  export let title = null;
  
  let sortedList;
  
  $:{
    sortedList = $linksPageSorted ?
      links.slice().sort((a, b) => (tr(a) > tr(b) ? 1 : -1)) :
      links;    
  }
</script>

{#if links && links.length > 0}
  {#if !title}
    <div class="links-page-button">
      <button
        style={$linksPageSorted ? "" : "text-decoration:line-through"}
        on:click={(e) => (linksPageSorted.update(v=>!v))}
      >
        <Tr s="A-Z" />
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
    <PaginatedList items={sortedList} sorted={false} pageSize={600}/>
  {/if}
{/if}
