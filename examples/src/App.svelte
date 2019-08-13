<script>
  import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
</script>

<!-- Example of how to override tab styles -->
<style>
  /* :global(.svelte-tabs button.svelte-tabs__selected) {
    border-bottom: 2px solid red;
  }

  :global(.svelte-tabs button.svelte-tabs__tab) {
    background: blue;
  } */
</style>

<h1>Svelte Tabs</h1>

<Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanel>
    <h2>Panel One</h2>
  </TabPanel>

  <TabPanel>
    <h2>Panel Two</h2>
  </TabPanel>

  <TabPanel>
    <h2>Panel Three</h2>
  </TabPanel>
</Tabs>
