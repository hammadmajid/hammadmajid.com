<script lang="ts">
	import { slugify } from '$lib/utils';
	import Link from '$lib/components/Link.svelte';

	interface Props {
		level: '1' | '2' | '3' | '4' | '5' | '6';
		content: string;
	}

	const { level, content }: Props = $props();
	const slug = slugify(content);
</script>

{#if level === '1'}
	<h1 class="before:content-['#'] before:text-zinc-500 before:mr-1 text-3xl" id={slug}>
		<Link fontWeight="font-bold" href="#{slug}">{content}</Link>
	</h1>
{:else if level === '2'}
	<h2 class="before:content-['#'] before:text-zinc-500 before:mr-1 text-2xl" id={slug}>
		<Link fontWeight="font-bold" href="#{slug}">{content}</Link>
	</h2>
{:else if level === '3'}
	<h3 class="before:content-['#'] before:text-zinc-500 before:mr-1 text-xl" id={slug}>
		<Link fontWeight="font-semibold" href="#{slug}">{content}</Link>
	</h3>
{:else if level === '4'}
	<h4 class="before:content-['#'] before:text-zinc-500 before:mr-1 text-lg" id={slug}>
		<Link fontWeight="font-semibold" href="#{slug}">{content}</Link>
	</h4>
{:else if level === '5'}
	<h5 class="before:content-['#'] before:text-zinc-500 before:mr-1" id={slug}>
		<Link fontWeight="font-medium" href="#{slug}">{content}</Link>
	</h5>
{:else if level === '6'}
	<h6 class="before:content-['#'] before:text-zinc-500 before:mr-1" id={slug}>
		<Link href="#{slug}">{content}</Link>
	</h6>
{/if}
