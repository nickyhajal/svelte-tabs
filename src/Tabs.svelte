<script context="module">
  export const TABS = {};
</script>

<script>
  import { setContext, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  const tabs = [];
  const panels = [];

  const selectedTab = writable(null);
  const selectedPanel = writable(null);

  function removeAndUpdateSelected(arr, item, selectedStore) {
    const index = arr.indexOf(item);
    arr.splice(index, 1);
    selectedStore.update(selected => selected === item ? (arr[index] || arr[arr.length - 1]) : selected);
  }

  function registerItem(arr, item, selectedStore) {
    arr.push(item);
    selectedStore.update(selected => selected || item);
    onDestroy(() => removeAndUpdateSelected(arr, item, selectedStore));
  }

  setContext(TABS, {
    registerTab(tab) {
      registerItem(tabs, tab, selectedTab);
    },

    registerPanel(panel) {
      registerItem(panels, panel, selectedPanel);
    },

    selectTab(tab) {
      const index = tabs.indexOf(tab);
      selectedTab.set(tab);
      selectedPanel.set(panels[index]);
    },

    selectedTab,
    selectedPanel
  });
</script>

<div class="svelte-tabs">
  <slot></slot>
</div>