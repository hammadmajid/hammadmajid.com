<script lang="ts">
	import '$lib/app.css';
	import Link from '$lib/components/Link.svelte';

	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="max-w-screen-md mx-auto h-screen flex flex-col justify-between">
	<!--> TODO: add nav here <-->
	{@render children()}

		<footer class="pb-16 p-4 border-t-2 border-zinc-500 text-center space-y-2">
			<p>
				<Link href="/meta#license">Unlincensed</Link> by Hammad Majid {new Date().getFullYear()}
			</p>
			<p class="flex flex-row justify-center items-center gap-1">
				<Link href="https://github.com/hammadmajid/hammadmajid.me/commits/production">
					<i class="fa-solid fa-code-commit"></i>
				</Link>
				<span class="mx-1 font-bold text-xl"> · </span>
				<span class="text-sm">
					Last built {new Date().getUTCFullYear()}-{new Date().getUTCMonth()}-{new Date().getUTCDate()}
				</span>
			</p>
		</footer>
</div>
