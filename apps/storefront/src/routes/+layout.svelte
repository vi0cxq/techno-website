<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import Lenis from 'lenis';
	import Footer from '$lib/components/footer.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import '../app.css';
	import { browser } from '$app/environment';
	import { onMount, setContext } from 'svelte';

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

	let { children } = $props();
</script>

<Navigation />
<main class="bg-background relative z-10 mb-[100vh] flex min-h-screen flex-col overflow-x-hidden">
	{@render children()}
</main>
<Footer />
