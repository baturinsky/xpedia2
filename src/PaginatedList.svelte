<script>
  import { paginate, PaginationNav } from 'svelte-paginate'
  import { Link, divider, LinksList, Value } from "./Components";
  import { rul } from "./Ruleset";
  import {leftRightClickSwipe} from "./store"
  import {onMount, onDestroy} from "svelte";
  import {clamp} from "./util"

  export let items;
  export let paginatedItems;

  export let sorter;
  
  let currentPage = 1
  let pagesNumber = 1;
  export let pageSize = 40
  export let onePageMax = 200
  
  $: {
    pagesNumber = items.length<=onePageMax?1:Math.ceil(items.length / pageSize)
    if (items instanceof Set) {
      items = [...items];
    }
    let sortedItems = sorter?sorter(items):items;
    if(Array.isArray(items)){
      if(currentPage>pagesNumber)
        currentPage = 1;
      paginatedItems = items.length<=onePageMax?items:paginate({ items:sortedItems, pageSize, currentPage })
    }
  }

	onMount(async () => {
    leftRightClickSwipe.set((delta)=>currentPage = clamp(1, currentPage+delta, pagesNumber))
	});

  onDestroy(async () => {
    leftRightClickSwipe.set(null)
	});
</script>

{#if pagesNumber > 1}
  <div class="dark-pagination-nav">
    <PaginationNav
      totalItems={items.length}
      pageSize={pageSize}
      currentPage={currentPage}
      showStepOptions={true}
      limit = {7}
      on:setPage={(e) => currentPage = e.detail.page}
    />
  </div>
{/if}

<span class="links-list">
  <slot {paginatedItems}>
    {#each paginatedItems as item, i}
      {@html divider(i)}<Link href={item} />
    {/each}
  </slot>
</span>
