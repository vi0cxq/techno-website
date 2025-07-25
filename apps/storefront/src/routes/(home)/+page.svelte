<script lang="ts">
	import { PUBLIC_SITE_URL } from '$env/static/public';

	import { MetaTags } from 'svelte-meta-tags';

	import About from './sections/about.svelte';
	import FeaturedProducts from './sections/featured-products.svelte';
	import Showrooms from './sections/showrooms.svelte';
	import Journal from './sections/journal.svelte';
	import Ig from './sections/ig.svelte';

	import { getContext, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import {
		getIsTransition,
		getNavigationStore,
		updateIsPreloading
	} from '$lib/stores/transition.svelte';

	import type Lenis from 'lenis';

	let container: HTMLElement;

	let preloader: HTMLElement;

	const delay = getIsTransition() === 'first' ? 0.2 : 1.4;

	let lenis = getContext<Lenis>('lenis');

	const navigation = getNavigationStore();

	const animateTitle = () => {
		let split: GSAPTween;
		gsap.set('.header-bg', { autoAlpha: 1 });
		gsap.set(['.s1'], { autoAlpha: 1 });

		SplitText.create(['.s1'], {
			type: 'words,lines',
			linesClass: 'line',
			autoSplit: true,
			mask: 'lines',
			onSplit: (self) => {
				split = gsap.from(self.lines, {
					duration: 2,
					yPercent: 100,
					opacity: 0,
					stagger: 0,
					ease: 'expo.out',
					delay: delay ? delay : 0
				});

				return split;
			}
		});
	};

	onMount(() => {
		const ctx = gsap.context(() => {
			if (navigation.loader.current) {
				lenis.stop();

				const tl = gsap.timeline();

				gsap.set(preloader, { autoAlpha: 1 });
				gsap.set('.image-wrapper', { autoAlpha: 1 });

				tl.to('.image-wrapper', {
					width: 320,
					ease: 'power2.inOut',
					duration: 0.8,
					delay: 0.2
				}).to('.image-wrapper', {
					width: '100vw',
					height: '100vh',
					duration: 0.8,
					ease: 'power2.inOut',
					delay: 0.6,
					onComplete: () => {
						gsap.set(preloader, { visibility: 'hidden', display: 'none' });

						animateTitle();

						updateIsPreloading(false);

						lenis.start();

						navigation.hideLoader();
					}
				});
			} else {
				animateTitle();
			}
		}, container);

		return () => {
			ctx.revert();
		};
	});
</script>

<MetaTags
	title="Techno Ceram - Premium Ceramic Tiles"
	titleTemplate="%s"
	description="Techno Ceram offers premium ceramic tiles combining timeless design and high performance. Discover our unique collections."
	canonical={PUBLIC_SITE_URL}
	openGraph={{
		title: 'Techno Ceram',
		description:
			'Techno Ceram offers premium ceramic tiles combining timeless design and high performance. Discover our unique collections.',
		url: PUBLIC_SITE_URL,
		type: 'website',
		images: [
			{
				url: `${PUBLIC_SITE_URL}/og/home_og.jpg`,
				width: 1200,
				height: 648,
				alt: 'Techno Ceram - Premium Ceramic Tiles'
			}
		]
	}}
/>

<header
	class="bg-background-2 relative flex min-h-svh items-end px-2 pb-4 md:p-[var(--container-padding)]"
	bind:this={container}
>
	<div
		class="bg-background-2 invisible fixed left-0 top-0 z-[10000] flex h-screen w-full items-center justify-center overflow-hidden opacity-0"
		bind:this={preloader}
	>
		<div class="flex items-center">
			<div class="flex items-center overflow-hidden">
				<p class="mr-0.5 text-base font-medium md:text-xl">TECHNO</p>
			</div>
			<div class="image-wrapper">
				<enhanced:img
					src="/static/images/ceram.webp?w=1920;1600;1200;800;400"
					alt="techno ceram"
					sizes="min(1920px, 100vw)"
					class="image"
					fetchpriority="high"
				/>
			</div>
			<div class="flex items-center overflow-hidden">
				<p class="ml-0.5 text-base font-medium md:text-xl">TECHNO</p>
			</div>
		</div>
	</div>

	<enhanced:img
		src="/static/images/ceram.webp?w=1920;1600;1200;"
		alt="techno ceram"
		style="position: absolute; width: 100vw; height: 100%; object-fit: cover; top: 0; left: 0;"
		fetchpriority="high"
		sizes="min(1920px, 100vw)"
		class="header-bg invisible opacity-0"
	/>
	<!-- <div class="bg-foreground/20 absolute left-0 top-0 size-full"></div> -->
	<h1 class="text-background s1 z-10 w-[15ch] text-5xl leading-[1.5cap] opacity-0">
		Defining <span class="font-ivy">Spaces</span> with
		<span class="font-ivy"> Timeless </span>
		Elegance
	</h1>
</header>
<About />
<FeaturedProducts />
<Showrooms />
<Journal />
<Ig />

<svelte:window
	onbeforeunload={() => {
		navigation.showLoader();
	}}
/>

<style>
	.image-wrapper {
		width: 0;
		height: 220px;
		position: relative;
		visibility: hidden;
		overflow: hidden;
	}
	.image {
		position: absolute;
		left: 50%;
		top: 0;
		transform: translateX(-50%);
		width: 100%;
		height: 100%;
		object-fit: cover;
		will-change: transform, width, height;
		display: inline-block;
	}
</style>
