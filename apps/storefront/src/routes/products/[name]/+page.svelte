<script lang="ts">
	import { parse } from 'marked';

	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

	import headerImage from '$lib/assets/images/ceram.webp';
	import jimmy from '$lib/assets/images/jimmy.jpg';
	import Faq from '$lib/components/faq.svelte';
	import { tiles } from '$lib/data';

	let options: EmblaOptionsType = { loop: false, align: 'start' };

	let emblaApi = $state<EmblaCarouselType>();

	function onInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
	}

	const dotClick = (snap: number) => {
		emblaApi?.scrollTo(snap);
	};
	$effect(() => {});

	let handpicked = tiles.slice(0, 4);

	const source = `
Rustic Blue Wood is a multi print tile with 21 different print faces, each with a different wood effect and colour available, 
to give a rustic worn distress look and mimic a reclaimed wood effect for any floor or wall.

Also known as VINTAGE MULTI MATTE by Yurtbay Seramik.

15x60cm matt wood effect floor tile made of porcelain with an ink jet digital print.

Reflecting the beauty and warmth of wood, which was transformed on to ceramic using digital technology, the Vintage Series provides a natural affluence while blending with a variety of styles such as minimalist  and modern.

Completely frost proof and suitable as a kitchen or bathroom floor tile. Can also be used as a bathroom wall tile.

Wood-effect tiles are much easier to lay, maintain and clean than  real wooden flooring as well as being much more hard wearing. They do  not require sealing and are not prone to warping or rot. Advances in  production and manufacturing allows the beauty of natural wood to be  perfectly captured with incredible authenticity.
    `;

	let html = parse(source);
</script>

<main>
	<div class="mb-[var(--section-padding)] flex flex-col lg:flex-row">
		<div
			class="lg:bg-background-2 top-0 flex items-center justify-center gap-3 pt-12 lg:sticky lg:h-screen lg:w-1/2 lg:pt-0 lg:pb-3"
		>
			<div class="relative aspect-[8/9] w-[95%] md:w-[72%]">
				<div
					class="flex size-full gap-3 overflow-hidden"
					id="viewport"
					use:emblaCarouselSvelte={{
						options,
						plugins: []
					}}
					onemblaInit={onInit}
				>
					<div id="container" style="margin-left: -1rem; display: flex;">
						{#each handpicked as tile (tile.id)}
							<div
								style="transform: translate3d(0, 0, 0); flex: 0 0 100%; min-width: 0; padding-left: 1rem"
							>
								<img class="size-full object-cover" src={jimmy} alt="Your alt text" />
							</div>
						{/each}
					</div>
				</div>

				<div
					class="absolute -bottom-20 flex h-16 gap-2 xl:top-0 xl:-left-[5vw] xl:w-16 xl:flex-col"
				>
					{#each handpicked as tile, i (tile)}
						<button
							onclick={() => dotClick(i)}
							class="aspect-[3/4] w-full cursor-pointer bg-cover"
							style="background-image: url('https://picsum.photos/600/350?v={i}')"
						>
							<span class="hidden">{i} </span>
						</button>
					{/each}
				</div>
			</div>
		</div>
		<div
			class="flex-1 overflow-hidden px-[var(--container-padding)] pt-32 lg:pt-[calc(var(--section-padding)-2rem)] xl:px-[var(--section-padding)]"
		>
			<p class="text-sm font-medium uppercase">Floor tile</p>
			<h3 class="font-ivy max-w-[15ch] pt-2 text-2xl" style="line-height: 1.1;">
				Lavant Light Floor Tile 600x600mm
			</h3>
			<div class="prose text-foreground my-8 max-w-full text-sm">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html html}
			</div>

			<p class="font-ivy text-xl">Tile Specifications</p>

			<div class="mt-4 text-sm">
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Material</span>
					<span>Porcelain</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Dimensions</span>
					<span>150×600 mm</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Thickness</span>
					<span>9 mm</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Tiles / m²</span>
					<span>11</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Tiles / box</span>
					<span>9</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Coverage / box</span>
					<span>0.82 m²</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Color</span>
					<span>Mix</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Finish</span>
					<span>Matt</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Texture</span>
					<span>Textured</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Usage</span>
					<span>Wall & Floor</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Anti slip</span>
					<span>No (R10)</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">PEI rating</span>
					<span>4</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Area</span>
					<span>Indoor</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Glazed</span>
					<span>Yes</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Requires sealing</span>
					<span>No</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Frost proof</span>
					<span>Yes</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Rectified edge</span>
					<span>No</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Fire hearths</span>
					<span>Yes</span>
				</div>
				<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
					<span class="-mb-1 min-w-36 font-semibold">Trim size</span>
					<span>12 mm</span>
				</div>
			</div>
		</div>
	</div>

	<div class="bg-background-2 py-[var(--section-padding)]">
		<div
			class="mb-6 flex flex-col gap-4 px-[var(--container-padding)] sm:items-center sm:text-center md:mb-12 md:gap-5"
		>
			<h3 class="max-w-[15ch] text-2xl leading-[1.35cap]">
				<span class="font-ivy"> Handpicked </span> for You
			</h3>
			<p class="max-w-[35ch] text-base leading-tight md:text-lg">
				Proven favorites that perform beautifully, wherever you lay them.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-6 px-[var(--container-padding)] sm:grid-cols-2 md:gap-8">
			{#each handpicked as tile (tile.id)}
				<article>
					<a href="/">
						<div class="relative aspect-[4/5] w-full">
							<img
								src={headerImage}
								alt={tile.name}
								class="absolute top-0 left-0 size-full object-cover"
							/>
						</div>

						<h2 class="py-1 text-base font-medium underline">
							{tile.name}
						</h2>
					</a>
				</article>
			{/each}
		</div>
	</div>
	<Faq />
</main>

<style>
	.embla {
		max-width: 48rem;
		margin: auto;
		--slide-height: 19rem;
		--slide-spacing: 1rem;
		--slide-size: 100%;
	}
	.embla__viewport {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
		touch-action: pan-y pinch-zoom;
		margin-left: calc(var(--slide-spacing) * -1);
	}
	.embla__slide {
		transform: translate3d(0, 0, 0);
		flex: 0 0 var(--slide-size);
		min-width: 0;
		padding-left: var(--slide-spacing);
	}
	.embla__slide__img {
		border-radius: 1.8rem;
		display: block;
		height: var(--slide-height);
		width: 100%;
		object-fit: cover;
	}
</style>
