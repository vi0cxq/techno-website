<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, setContext, type Snippet } from 'svelte';

	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import Lenis from 'lenis';

	import Footer from '$lib/components/footer.svelte';
	import Navigation from '$lib/components/navigation.svelte';

	import type { Attachment } from 'svelte/attachments';
	import { isFirstLoad } from '$lib/stores/navigation.svelte';
	import '../app.css';

	let { children, data }: { children: Snippet; data: { url: string } } = $props();

	let lenis: Lenis;

	if (browser) {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
		lenis = new Lenis();
		setContext<Lenis>('lenis', lenis);
	}

	$effect(() => {
		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis?.raf(time * 1000);
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

	const transition: Attachment = (element) => {
		if (isFirstLoad()) {
			console.log('SKIP: First load');
			return;
		}

		console.log('RUN: Internal nav');

		const tl = gsap.timeline();

		tl.to(element, {
			height: '100vh',
			duration: 0.8,
			ease: 'power4.out'
		});

		tl.to(element, {
			y: '-100vh',
			height: 0,
			duration: 0.8,
			ease: 'expo.in',
			delay: 0.2
		});

		return () => {};
	};

	function fade(node: Element, { delay, duration }: { delay?: number; duration: number }) {
		gsap.set(node, {
			y: -window.scrollY
		});

		lenis.scrollTo(0, { immediate: true });

		return {
			duration,
			delay
		};
	}

	onMount(() => {
		let lastHeight = document.body.offsetHeight;

		const observer = new ResizeObserver(() => {
			const newHeight = document.body.offsetHeight;
			if (newHeight !== lastHeight) {
				lastHeight = newHeight;
				console.log('📏 Body height changed, refreshing ScrollTrigger');
				ScrollTrigger.refresh();
			}
		});

		observer.observe(document.body);

		return () => {
			observer.disconnect();
		};
	});
</script>

<QueryClientProvider client={queryClient}>
	{#key data.url}
		<Navigation />

		<div class="wrapper" {@attach transition}></div>
		<div
			class="bg-background relative z-10 mb-[100vh] flex min-h-screen flex-col overflow-hidden"
			out:fade={{ duration: 1200 }}
		>
			{@render children()}
		</div>
	{/key}
	<Footer />
</QueryClientProvider>

<style>
	:global {
		html.lenis,
		html.lenis body {
			height: auto;
		}

		.lenis:not(.lenis-autoToggle).lenis-stopped {
			overflow: clip;
		}

		.lenis.lenis-smooth [data-lenis-prevent] {
			overscroll-behavior: contain;
		}

		.lenis.lenis-smooth iframe {
			pointer-events: none;
		}

		.lenis.lenis-autoToggle {
			transition-property: overflow;
			transition-duration: 1ms;
			transition-behavior: allow-discrete;
		}
	}
	.wrapper {
		background-color: oklch(0.2191 0.0058 285.91);
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0;
		z-index: 100000;
	}
</style>
