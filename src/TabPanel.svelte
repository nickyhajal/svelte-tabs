<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';

  const panel = {};
  const { registerPanel, activePanel } = getContext(TABS);

  registerPanel(panel);
</script>

{#if $activePanel === panel}
  <slot></slot>
{/if}
