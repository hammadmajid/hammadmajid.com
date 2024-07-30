<script lang="ts">
	interface Props {
		href: string;
		fontWeight?: string;
		children: import('svelte').Snippet;
	}

	let { href, fontWeight: weightOverride = 'font-medium', children }: Props = $props();
</script>

<a
	class={'underline font-inherit underline-offset-4 decoration-dashed hover:text-blue-500 transition-all duration-350' +
		' ' +
		weightOverride}
	{href}>{@render children()}</a
>
