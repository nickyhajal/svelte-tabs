<script>
	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';

	export let name;
</script>

<style>

</style>

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
