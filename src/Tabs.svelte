<script context="module">
  export const TABS = {};
</script>

<script>
  import { setContext, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  const tabs = [];
  const panels = [];

  const activeTab = writable(null);
  const activePanel = writable(null);

  setContext(TABS, {
    registerTab(tab) {
      tabs.push(tab);
      activeTab.update(active => active || tab);

      onDestroy(() => {
        const index = tabs.indexOf(tab);
        tabs.splice(index, 1);
        activeTab.update(active => active === tab ? (tabs[i] || tabs[tabs.length - 1]) : active);
      });
    },

    registerPanel(panel) {
      panels.push(panel);
      activePanel.update(active => active || panel);

      onDestroy(() => {
        const index = panels.indexOf(panel);
        panels.splice(index, 1);
        activePanel.update(active => active === panel ? (panels[i] || panels[panels.length - 1]) : active);
      });
    },

    selectTab(tab) {
      const index = tabs.indexOf(tab);
      activeTab.set(tab);
      activePanel.set(panels[index]);
    },

    activeTab,
    activePanel
  });
</script>

<div class="tabs">
  <slot></slot>
</div>