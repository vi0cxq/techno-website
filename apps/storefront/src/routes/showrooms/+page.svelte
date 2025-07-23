<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';

	import type { PageData } from './$types';
	import { urlFor } from '$lib/sanity/image';
	import { MetaTags } from 'svelte-meta-tags';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { getIsTransition } from '$lib/stores/transition.svelte';

	let { data }: { data: PageData } = $props();

	const query = $derived.by(() => {
		return useQuery(data);
	});

	let container: HTMLElement;

	const delay = getIsTransition() === 'first' ? 0.2 : 1.4;

	onMount(() => {
		const ctx = gsap.context(() => {
			gsap.set(['.s1'], { autoAlpha: 1 });
			let split: GSAPTween;

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
						delay
					});
					return split;
				}
			});

			gsap.to('.article', {
				autoAlpha: 1,
				y: 0,
				ease: 'power1.out',
				duration: 0.8,
				stagger: 0.01,
				delay
			});
		}, container);

		return () => {
			ctx.revert();
		};
	});
</script>

<MetaTags
	title="Showrooms"
	titleTemplate="%s | Techno Ceram"
	description="Visit Techno Ceram showrooms to explore our ceramic tile collections in person. Find the nearest location and plan your visit."
	canonical={`${PUBLIC_SITE_URL}/showrooms`}
	openGraph={{
		title: 'Showrooms | Techno Ceram',
		description:
			'Visit Techno Ceram showrooms to explore our ceramic tile collections in person. Find the nearest location and plan your visit.',
		url: `${PUBLIC_SITE_URL}/showrooms`,
		type: 'website',
		images: [
			{
				url: `${PUBLIC_SITE_URL}/og/home_og.jpg`,
				width: 1200,
				height: 630,
				alt: 'Techno Ceram Showrooms'
			}
		]
	}}
/>

<main class="px-[var(--container-padding)] py-[var(--section-padding)]" bind:this={container}>
	<div class="border-foreground/30 border-b pb-4">
		<h3
			class="s1 w-full max-w-[15ch] text-2xl font-medium uppercase leading-[1.35cap] opacity-0 sm:-ml-1"
		>
			showrooms
			<span class="font-ivy text-lg">({$query.data.length})</span>
		</h3>
	</div>
	<section
		class="grid grid-cols-1 items-start gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
	>
		{#each $query.data as showroom, i (showroom._id)}
			<article class="article relative translate-y-28 opacity-0">
				<a target="_blank" href={`${showroom.location}`}>
					<p class="mb-1 font-medium">
						({i})
					</p>
					<div
						class="bg-muted relative aspect-auto w-full overflow-hidden"
						style="padding-top: {100 / showroom.aspect_ratio}%;"
					>
						<img
							src={urlFor(showroom.image).fit('max').width(1200).url()}
							alt={showroom.name}
							class="absolute left-0 top-0 size-full scale-105 object-cover duration-[0.4s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform hover:scale-100"
							fetchpriority="high"
							sizes="(min-width:1024px) 1200px, (min-width:768px) 400px, 100vw"
							srcset="
												{urlFor(showroom.image).width(400).url()} 400w,
												{urlFor(showroom.image).width(1200).url()} 1200w,
												{urlFor(showroom.image).width(1600).url()} 1600w,
												{urlFor(showroom.image).width(2000).url()} 2000w
												"
						/>
					</div>

					<h2 class="py-1 text-base font-medium underline">
						{showroom.name}
					</h2>
				</a>
			</article>
		{/each}
	</section>
</main>
