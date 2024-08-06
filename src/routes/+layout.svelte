<script lang="ts">
	import '$lib/app.css';
	import Link from '$lib/components/Link.svelte';

	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const links = ['Projects', 'Uses', 'Contact', 'About'];
</script>

<div class="w-screen bg-zinc-50 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
	<div class="max-w-screen-md min-h-screen mx-auto flex flex-col justify-between">
		<div>
			<header class="p-4 border-b-2 border-zinc-500">
				<div class="w-full flex flex-col md:flex-row justify-between items-center">
					<div class="w-full flex flex-row justify-between">
						<a href="/" class="text-nowrap block font-medium text-xl">Hammad Majid</a>

						<button
							class="md:hidden"
							onclick={() => {
								let menu = document.getElementById('nav-menu')!;
								menu.classList.toggle('hidden');
								menu.classList.toggle('flex');
							}}
						>
							<i class="fa-solid fa-bars"></i>
						</button>
					</div>
					<nav>
						<ul id="nav-menu" class="hidden mt-4 md:mt-0 md:flex flex-col md:flex-row gap-4">
							{#each links as link}
								<Link href={link.toLowerCase()}>{link}</Link>
							{/each}
						</ul>
					</nav>
				</div>
			</header>
			{@render children()}
		</div>

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
</div>
