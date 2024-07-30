<script lang="ts">
	import { slugify } from '$lib/utils';

	interface Props {
		level: '1' | '2' | '3' | '4' | '5' | '6';
		content: string;
	}

	const { level, content }: Props = $props();
	const slug = slugify(content);
</script>

{#snippet constructHeading(styles: string)}
	{@html `<h${level}  id="${slug}"	
		class="${"underline decoration-dashed underline-offset-4 hover:text-blue-500 transition-all duration-300" + ' ' + styles}">
			<a href="#${slug}">${content}</a>
	</h${level}>`}
{/snippet}

{#if level === '1'}
	{@render constructHeading('font-bold text-3xl')}
{:else if level === '2'}
	{@render constructHeading('font-bold text-2xl')}
{:else if level === '3'}
	{@render constructHeading('font-semibold text-xl')}
{:else if level === '4'}
	{@render constructHeading('font-medium text-lg')}
{:else if level === '5'}
	{@render constructHeading('text-lg')}
{:else if level === '6'}
	{@render constructHeading('')}
{/if}
