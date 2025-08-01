<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import ParallaxImg from '$lib/components/parallax-img.svelte';

	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { onMount } from 'svelte';

	import { getTransitionStore } from '$lib/stores/transition.svelte';

	let container: HTMLElement;

	let transition = getTransitionStore();

	const delay = transition.delay.current ? 1.4 : 0.2;

	onMount(() => {
		const ctx = gsap.context(() => {
			gsap.set(['.s1', '.s2', '.s3', '.s4'], { autoAlpha: 1 });
			let split: GSAPTween;

			SplitText.create(['.s1', '.s2', '.s3', '.s4'], {
				type: 'words,lines',
				linesClass: 'line',
				autoSplit: true,
				mask: 'lines',
				onSplit: (self) => {
					split = gsap.from(self.lines, {
						duration: 2,
						yPercent: 100,
						opacity: 0,
						stagger: 0.05,
						ease: 'expo.out',
						delay
					});
					return split;
				}
			});

			gsap.to('.founder-img', {
				autoAlpha: 1,
				scale: 1,
				ease: 'expo.out',
				duration: 2,
				delay
			});
		}, container);

		return () => {
			ctx.revert();
		};
	});
</script>

<MetaTags
	title="Our Story"
	titleTemplate="%s | Techno Ceram"
	description="Learn about Techno Ceram’s journey, values, and commitment to quality craftsmanship in ceramic tile production."
	canonical={`${PUBLIC_SITE_URL}/the-story`}
	openGraph={{
		title: 'Our Story | Techno Ceram',
		description:
			'Learn about Techno Ceram’s journey, values, and commitment to quality craftsmanship in ceramic tile production.',
		url: `${PUBLIC_SITE_URL}/the-story`,
		type: 'website',
		images: [
			{
				url: `${PUBLIC_SITE_URL}/og/home_og.jpg`,
				width: 1200,
				height: 630,
				alt: 'Techno Ceram – Our Story'
			}
		]
	}}
/>

<main class="pt-[calc(var(--section-padding)*1.5)] lg:pt-[calc(var(--section-padding)*2)]">
	<section class="px-[var(--container-padding)]" bind:this={container}>
		<p class="s1 text-xl leading-[1.5cap] opacity-0 xl:text-[clamp(2rem,1.6rem+2vw,3rem)]">
			TECHNO CERAM is a ceramic tile manufacturer whose bold approach, technical precision, and
			design-driven vision redefine the possibilities of modern surfaces across scale, space, and
			style.
		</p>
		<div
			class="flex flex-col gap-3 py-[var(--section-padding)] sm:flex-row sm:gap-8 lg:py-[calc(var(--section-padding)*1.5)]"
		>
			<div class="min-w-44 xl:min-w-96">
				<p class="s2 font-medium uppercase opacity-0">company</p>
			</div>
			<div class="flex-1">
				<p class="max-w-[55ch] space-y-8 text-base leading-normal">
					<span class="s3 block opacity-0">
						Established in 2017, TECHNO CERAM emerged as the second entity of a growing group
						committed to redefining ceramic craftsmanship in Algeria. Located in the Dhra Ben Sabah
						Industrial Zone in Tazoult, Batna, the 92,967 m² site is equipped with two cutting-edge
						production lines dedicated to manufacturing large-format, rectified, and extra-polished
						tiles. From the beginning, the goal was clear: to merge industrial strength with design
						intelligence.
					</span>
					<span class="s4 block opacity-0">
						Since July 2022, TECHNO CERAM has operated at a capacity of 6.6 million m²
						annually—delivering surfaces that blend timeless appeal with contemporary direction.
						From classic styles to avant-garde finishes, each tile reflects a philosophy of control,
						clarity, and material excellence. Today, TECHNO CERAM stands at the intersection of
						technology and aesthetics—where bold production meets quiet elegance.
					</span>
				</p>
			</div>
			<div class="hidden flex-[0.5] md:block xl:flex-1">
				<div class="relative aspect-[5/6] size-full overflow-hidden">
					<enhanced:img
						src="/static/images/founder.webp?w=1400"
						alt="techno ceram"
						class="founder-img invisible absolute size-full scale-125 object-cover object-top opacity-0"
						fetchpriority="high"
						sizes="(max-width: 1024px) 1400px"
					/>
				</div>
			</div>
		</div>
	</section>

	<ParallaxImg
		classname="relative aspect-[5/6] w-full sm:aspect-[5/4] lg:aspect-video overflow-hidden"
		targetId="parallax-3"
	>
		<enhanced:img
			src="/static/images/story_building.webp?w=2560;1536;850"
			class="absolute left-0 top-[-5%] h-[115%] w-full object-cover will-change-transform"
			sizes="min(2560px, 100vw)"
			alt="techno ceram"
			fetchpriority="high"
		/>
	</ParallaxImg>

	<section
		class="bg-background-3 text-foreground-2 px-[var(--container-padding)] py-[var(--section-padding)] lg:py-[calc(var(--section-padding)*1.5)]"
	>
		<div
			class="mb-24 flex flex-col justify-between gap-4 md:flex-row md:items-end md:self-end xl:ml-[26rem]"
		>
			<h3 class="w-full max-w-[15ch] text-2xl leading-[1.35cap] sm:-ml-1">
				<span class="font-ivy"> Built </span>
				on Scale & Precision
			</h3>
			<p class="w-full max-w-[50ch] text-base leading-snug md:text-sm">
				From design to delivery, we manufacture at scale with exacting standards.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-x-8 gap-y-4 [grid-template-rows:auto_1fr] sm:grid-cols-2">
			<div class="border-foreground-2/30 flex flex-col gap-16 border-t py-8 md:gap-24">
				<p class="text-foreground-2/60 text-base uppercase">countries served</p>
				<p class="text-5xl font-medium">25+</p>
			</div>
			<div class="border-foreground-2/30 flex flex-col gap-16 border-t py-8 md:gap-24">
				<p class="text-foreground-2/60 text-base uppercase">annual tile production</p>
				<p class="text-5xl font-medium">6.6M m²</p>
			</div>
			<div class="border-foreground-2/30 flex justify-between border-t">
				<div class="flex flex-1 flex-col py-8">
					<p class="text-lg font-medium">99.9%</p>
					<p class="text-foreground-2/60 text-base">Quality control pass rate</p>
				</div>
				<div class="border-foreground-2/30 flex flex-1 flex-col border-l py-8 pl-8">
					<p class="text-lg font-medium">10+</p>
					<p class="text-foreground-2/60 text-base">Years of export experience</p>
				</div>
			</div>
			<div class="border-foreground-2/30 flex justify-between border-t">
				<div class="flex flex-1 flex-col py-8">
					<p class="text-lg font-medium">2</p>
					<p class="text-foreground-2/60 text-base">Production lines in Algeria</p>
				</div>
				<div class="border-foreground-2/30 flex flex-1 flex-col border-l py-8 pl-8">
					<p class="text-lg font-medium">1,200+</p>
					<p class="text-foreground-2/60 text-base">Tile designs available</p>
				</div>
			</div>
		</div>
	</section>
</main>
