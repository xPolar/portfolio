<script lang="ts">
	import { onMount } from 'svelte';

	import '../app.css';
	onMount(() => {
		onblur = () => {
			document.body.className =
				'bg-[#f3f3f3] dark:bg-[#151D29] motion-safe:transition-colors motion-safe:duration-300';
		};
		onfocus = () => {
			document.body.className =
				'bg-[#f9f0f5] dark:bg-[#1C2433] motion-safe:transition-colors motion-safe:duration-300';
		};
	});
</script>

<main>
	<slot />
</main>

<footer />
