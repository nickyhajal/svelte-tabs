<script>
  import { getContext } from 'svelte';

  import getId from './id';
  import { TABS } from './Tabs.svelte';

  const tab = {
    id: getId()
  };
  const { registerTab, selectTab, selectedTab, controls } = getContext(TABS);

  let isSelected;
  $: isSelected = $selectedTab === tab;

  registerTab(tab);
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
	
	.svelte-tabs__selected {
		border-bottom: 2px solid teal;
    color: teal;
	}
</style>

<li 
  role="tab"
  id={tab.id}
  aria-controls={$controls[tab.id]}
  aria-selected={isSelected}
  class="svelte-tabs__tab {isSelected ? 'svelte-tabs__selected' : ''}"
  on:click={() => selectTab(tab)}>
	<slot></slot>
</li>
