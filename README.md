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

## Overriding styling

svelte-tabs comes with a basic default style, but it can be overridden. To override the styles to use your own, you will need to use global styles that have a higher specificity than the built-in styles.

To make sure your overridden styles have the most specificity, include the parent class `.svelte-tabs` in your selector, and include the element type (see below). An example selector would be `:global(.svelte-tabs li.svelte-tabs__selected)`.

Below are CSS selectors that can be used for the different components in this library:

- Tabs: `:global(.svelte-tabs)`
- Tab: `:global(.svelte-tabs li.svelte-tabs__tab)`
- Selected Tab: `:global(.svelte-tabs li.svelte-tabs__selected)`
- TabPanel: `:global(.svelte-tabs div.svelte-tabs__tab-panel)`

As a last resort, if you can't get the right specificity, you can always use `!important`.

## Credits

Derived from the code at [https://svelte.dev/repl/8e68120858e5322272dc9136c4bb79cc?version=3.7.0](https://svelte.dev/repl/8e68120858e5322272dc9136c4bb79cc?version=3.7.0) by Rich Harris

## Limitations

- Nested tab panels are not yet supported.
