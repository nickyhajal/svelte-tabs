<script>
  import { getContext, onMount, tick } from 'svelte';

  import getId from './id';
  import { TABS } from './Tabs.svelte';

  let tabEl;

  const tab = {
    id: getId()
  };
  const { registerTab, registerTabElement, selectTab, selectedTab, controls } = getContext(TABS);

  let isSelected;
  $: isSelected = $selectedTab === tab;

  registerTab(tab);

  onMount(async () => {
    await tick();
    registerTabElement(tabEl);
  });
</script>

<style>
	.svelte-tabs__tab {
		border: none;
		border-bottom: 2px solid transparent;
		color: #000000;
    cursor: pointer;
    list-style: none;
    display: inline-block;
    padding: 0.5em 0.75em;
	}
	
  .svelte-tabs__tab:focus {
    outline: thin dotted;
  }

	.svelte-tabs__selected {
		border-bottom: 2px solid #4F81E5;
    color: #4F81E5;
	}
</style>

<li
  bind:this={tabEl}
  role="tab"
  id={tab.id}
  aria-controls={$controls[tab.id]}
  aria-selected={isSelected}
  tabindex="{isSelected ? 0 : -1}"
  class:svelte-tabs__selected={isSelected}
  class="svelte-tabs__tab"
  on:click={() => selectTab(tab)}>
	<slot></slot>
</li>
