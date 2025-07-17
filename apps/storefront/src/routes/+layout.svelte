<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, setContext } from 'svelte';
	import { page } from '$app/state';

	import { VisualEditing, isPreviewing } from '@sanity/visual-editing/svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import Lenis from 'lenis';

	// import Footer from '$lib/components/footer.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import LiveMode from '$lib/components/LiveMode.svelte';
	import '../app.css';
	// import Footer from '$lib/components/footer.svelte';

	let lenis: Lenis;

	if (browser) {
		gsap.registerPlugin(ScrollTrigger);
		lenis = new Lenis({
			autoResize: true
		});
		setContext<Lenis>('lenis', lenis);
	}

	onMount(() => {
		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	});

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});

	let { children } = $props();
</script>

{#if $isPreviewing}
	<div
		class="bg-muted fixed bottom-4 left-1/2 z-[1000] w-fit -translate-x-1/2 rounded-full px-4 py-1 text-sm shadow"
	>
		<a href={`/preview/disable?redirect=${page.url.pathname}`} class="preview-toggle">
			<span class="font-medium">Preview Enabled</span>
			<span class="hover:text-red-600">Disable Preview</span>
		</a>
	</div>
{/if}

<QueryClientProvider client={queryClient}>
	<Navigation />
	<main class="bg-background relative z-10 mb-[100vh] flex min-h-screen flex-col">
		{@render children()}
	</main>
	<!-- <Footer /> -->
	{#if $isPreviewing}
		<VisualEditing />
		<LiveMode />
	{/if}
</QueryClientProvider>
