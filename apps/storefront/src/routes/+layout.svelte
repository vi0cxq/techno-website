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
	import { MediaQuery } from 'svelte/reactivity';

	let { children, data }: { children: Snippet; data: { url: string } } = $props();
	const desktop = new MediaQuery('min-width: 1024px');

	let lenis: Lenis;

	if (browser) {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
		lenis = new Lenis();
		setContext<Lenis>('lenis', lenis);
	}

	onMount(() => {
		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis?.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		const observer = new ResizeObserver(() => {
			ScrollTrigger.refresh();
			console.log('Resize->>>>');
		});

		observer.observe(document.body);

		return () => {
			observer.disconnect();
		};
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
			clipPath: 'inset(0% 0% 0% 0%)',
			duration: desktop ? 1 : 1.4,
			ease: 'expo.out'
		});

		tl.to(element, {
			clipPath: 'inset(0% 0% 100% 0%)',
			duration: desktop ? 1 : 1.4,
			ease: 'expo.out',
			delay: 0.3
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
</script>

<QueryClientProvider client={queryClient}>
	{#key data.url}
		<Navigation />

		<div class="wrapper" {@attach transition}>
			<p class="text-foreground-2 text-base uppercase">
				Techno <span>Ceram</span>
			</p>
		</div>
		<div
			class="bg-background relative z-10 mb-[100vh] flex min-h-screen flex-col overflow-hidden"
			out:fade={{ duration: desktop ? 1200 : 1300 }}
		>
			{@render children()}
		</div>
	{/key}
	<Footer />
</QueryClientProvider>

<style>
	/* :global {
		html.lenis,
		html.lenis body {
			height: auto;
		}

		.lenis:not(.lenis-autoToggle) {
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
	} */
	.wrapper {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: oklch(0.2191 0.0058 285.91);
		clip-path: inset(100% 0% 0% 0%); /* fully hidden */
		z-index: 100000;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
