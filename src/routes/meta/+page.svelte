<script>
	import Heading from '$lib/components/Heading.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<main id="main-content" class="p-4 space-y-4">
	<section class="space-y-2">
		<Heading level="1" content="Meta" />
		<p class="text-justify">
			This page contains some information about the website itself that I thought you might find
			usefull.
		</p>
	</section>
	<section class="space-y-2">
		<Heading level="2" content="License" />
		<p>
			All content on this website is copyright free. That means that everything is under the public
			domain and you can use and reuse the content or code of this website however you would like.
		</p>
		<p>Attribution is appreciated, but not required.</p>
		<p>
			You can find the full “license” on the <Link
				href="https://github.com/hammadmajid/hammadmajid.me">GitHub repo for this project.</Link
			>
		</p>
	</section>
</main>
