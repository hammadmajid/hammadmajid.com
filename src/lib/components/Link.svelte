<script lang="ts">
	interface Props {
		href: string;
		children: import('svelte').Snippet;
	}

	let { href, children }: Props = $props();
</script>

<a
	class="underline underline-offset-4 decoration-dashed font-medium hover:text-blue-500 transition-all duration-350"
	{href}>{@render children()}</a
>
