<script lang="ts">
	import '$lib/app.css';

	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="max-w-screen-md mx-auto h-screen flex flex-col justify-between">
	<!--> TODO: add nav here <-->
	{@render children()}
	<!--> TODO: add footer here <-->
</div>
