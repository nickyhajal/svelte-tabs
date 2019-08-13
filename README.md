# svelte-tabs

A tabs component for Svelte

## Installation

    npm install --save svelte-tabs

## Basic usage

```html
<script>
  import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
</script>

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
```

## Credits

Derived from the code at [https://svelte.dev/repl/8e68120858e5322272dc9136c4bb79cc?version=3.7.0](https://svelte.dev/repl/8e68120858e5322272dc9136c4bb79cc?version=3.7.0) by Rich Harris

## Limitations

- Nested tab panels are not yet supported.
