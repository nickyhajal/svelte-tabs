<script>
  import { getContext } from 'svelte';

  import { TABS } from './Tabs.svelte';

  const tab = {};
  const { registerTab, selectTab, selectedTab } = getContext(TABS);

  registerTab(tab);
</script>

<style>
	.svelte-tabs__tab {
		border: none;
		border-bottom: 2px solid white;
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

<li role="tab" class="svelte-tabs__tab {$selectedTab === tab ? 'svelte-tabs__selected' : ''}" on:click={() => selectTab(tab)}>
	<slot></slot>
</li>
