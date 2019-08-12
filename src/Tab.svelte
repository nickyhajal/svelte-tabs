<script>
  import { getContext } from 'svelte';

  import { TABS } from './Tabs.svelte';

  const tab = {};
  const { registerTab, selectTab, selectedTab } = getContext(TABS);

  registerTab(tab);
</script>

<style>
	button {
		background: none;
		border: none;
		border-bottom: 2px solid white;
		border-radius: 0;
		margin: 0;
		color: #ccc;
    cursor: pointer;
	}
	
	.svelte-tabs__selected {
		border-bottom: 2px solid teal;
		color: #333;
	}
</style>

<button class="svelte-tabs__tab {$selectedTab === tab ? 'svelte-tabs__selected' : ''}" on:click={() => selectTab(tab)}>
	<slot></slot>
</button>
