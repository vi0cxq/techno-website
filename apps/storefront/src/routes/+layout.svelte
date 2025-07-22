<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, setContext, type Snippet } from 'svelte';

	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import { CustomEase } from 'gsap/CustomEase';
	import Lenis from 'lenis';

	import Footer from '$lib/components/footer.svelte';
	import Navigation from '$lib/components/navigation.svelte';

	import '../app.css';

	let { children, data }: { children: Snippet; data: { url: string } } = $props();

	let lenis: Lenis;

	if (browser) {
		gsap.registerPlugin(ScrollTrigger, CustomEase);
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
			// console.log('Resize->>>>');
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

	const slideIn = (element: Element, { delay, duration }: { delay?: number; duration: number }) => {
		const tl = gsap.timeline();

		tl.to(element, {
			clipPath: 'inset(0% 0% 0% 0%)',
			duration,
			ease: 'expo.inOut'
		}).to(element, {
			clipPath: 'inset(0% 0% 100% 0%)',
			duration,
			ease: 'expo.out',
			delay: 0.3
		});

		return {
			duration: duration * 1000,
			delay,
			tick: (t: number) => {
				tl.progress(t);
			}
		};
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

		<div class="transition-wrapper" in:slideIn={{ duration: 2 }}>
			<p class="text-foreground-2 text-base uppercase">
				Techno <span>Ceram</span>
			</p>
		</div>

		<div
			class="bg-background relative z-10 mb-[100vh] flex min-h-screen flex-col"
			out:fade={{ duration: 800 }}
		>
			{@render children()}
		</div>
	{/key}
	<Footer />
</QueryClientProvider>

<style>
	.transition-wrapper {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: oklch(0.2191 0.0058 285.91);
		clip-path: inset(100% 0% 0% 0%);
		z-index: 100000;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
