<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types';
	import { PortableText, toPlainText } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity/image';
	import { MetaTags } from 'svelte-meta-tags';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/state';

	let options: EmblaOptionsType = { loop: false, align: 'start' };

	let emblaApi = $state<EmblaCarouselType>();

	function onInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
	}

	const dotClick = (snap: number) => {
		emblaApi?.scrollTo(snap);
	};

	let { data }: { data: PageData } = $props();

	const product = $derived.by(() => {
		return useQuery(data);
	});

	const title = $product.data ? $product.data.name : 'Not Found';

	const description = $product?.data?.description
		? toPlainText($product.data.description).slice(0, 160).trim()
		: 'Explore our unique tile collection at Techno Ceram.';

	const ogImageUrl = $product?.data?.image
		? urlFor($product.data.image).width(1200).height(630).fit('clip').format('jpg').url()
		: `${PUBLIC_SITE_URL}/og/home_og.jpg`;
</script>

<MetaTags
	{title}
	titleTemplate="%s | Techno Ceram"
	{description}
	canonical={`${PUBLIC_SITE_URL}/products/${page.params.slug}`}
	openGraph={{
		title,
		description,
		url: `${PUBLIC_SITE_URL}/products/${page.params.slug}`,
		type: 'website',
		images: [
			{
				url: ogImageUrl,
				width: 1200,
				height: 630,
				alt: title
			}
		]
	}}
/>

{#if $product.data}
	<main>
		<div class="mb-[var(--section-padding)] flex flex-col lg:flex-row">
			<div
				class="lg:bg-background-2 top-0 flex items-center justify-center gap-3 pt-12 lg:sticky lg:h-screen lg:w-1/2 lg:pb-3 lg:pt-0"
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
							{#each $product.data.imageGallery as p, i (i)}
								<div
									style="transform: translate3d(0, 0, 0); flex: 0 0 100%; min-width: 0; padding-left: 1rem"
								>
									<img
										src={urlFor(p).width(1280).format('webp').url()}
										alt=""
										class="size-full object-cover"
										fetchpriority="high"
										srcset={[
											`${urlFor(p).width(320).url()} 320w`,
											`${urlFor(p).width(640).url()} 640w`,
											`${urlFor(p).width(768).url()} 768w`,
											`${urlFor(p).width(900).url()} 900w`,
											`${urlFor(p).width(1024).url()} 1024w`,
											`${urlFor(p).width(1280).url()} 1280w`
										].join(', ')}
										sizes="(max-width: 640px) 320px, (max-width: 768px) 640px, (max-width: 1024px) 768px, (max-width: 1280px) 1024px, 950px"
									/>
								</div>
							{/each}
						</div>
					</div>

					<div
						class="absolute -bottom-20 flex h-16 gap-2 xl:-left-[5vw] xl:top-0 xl:w-16 xl:flex-col"
					>
						{#each $product.data.imageGallery as p, i (i)}
							<button
								onclick={() => dotClick(i)}
								class="aspect-[3/4] w-full cursor-pointer bg-cover bg-center"
								style="background-image: url('{urlFor(p).width(64).format('webp').url()}')"
							>
								<span class="hidden">{i} </span>
							</button>
						{/each}
					</div>
				</div>
			</div>
			<div
				class="flex-1 overflow-hidden px-[var(--container-padding)] pt-32 lg:pt-[calc(var(--section-padding))] xl:px-[var(--section-padding)]"
			>
				<h3 class="font-ivy max-w-[18ch] text-2xl" style="line-height: 1;">
					{$product.data.name}
				</h3>
				<div class="prose text-foreground my-8 max-w-full text-base lg:text-sm">
					<div class="prose [&_h1]:font-ivy max-w-[80ch] text-gray-500 [&_p]:text-base">
						<PortableText value={$product.data.description} />
					</div>
				</div>

				<p class="font-ivy text-xl">Tile Specifications</p>
				{#if $product.data}
					{@const {
						material,
						shape,
						dimensions,
						thickness,
						tilesPerSqMetre,
						tilesPerBox,
						coveragePerBox,
						color,
						finish,
						texture,
						wallOrFloorTile,
						area,
						glazed,
						requiresSealing,
						frostProof,
						rectifiedEdge,
						fireHearthsSurround,
						trimSize,
						antiSlipRating
					} = $product.data.details}

					<div class="mt-4 text-sm">
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Material</span>
							<span> {material.name} </span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Shape</span>
							<span> {shape.name} </span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Dimensions</span>
							<span> {dimensions} </span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Thickness</span>
							<span> {thickness} </span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Tiles / m²</span>
							<span> {tilesPerSqMetre} </span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Tiles / box</span>
							<span> {tilesPerBox} </span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Coverage / box</span>
							<span> {coveragePerBox} </span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Color</span>
							<span> {color.name} </span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Finish</span>
							<span> {finish} </span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Texture</span>
							<span> {texture} </span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Usage</span>
							<span> {wallOrFloorTile} </span>
						</div>
						{#if wallOrFloorTile !== 'Wall' && antiSlipRating}
							<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
								<span class="-mb-1 min-w-36 font-semibold">Anti slip</span>
								<span> {antiSlipRating} </span>
							</div>
						{/if}
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Area</span>
							<span> {area} </span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Glazed</span>
							<span> {glazed ? 'Yes' : 'No'} </span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Requires sealing</span>
							<span>{requiresSealing ? 'Yes' : 'No'}</span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Frost proof</span>
							<span>{frostProof ? 'Yes' : 'No'}</span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Rectified edge</span>
							<span>{rectifiedEdge ? 'Yes' : 'No'}</span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Fire hearths</span>
							<span>{fireHearthsSurround ? 'Yes' : 'No'}</span>
						</div>
						<div class="border-foreground/30 flex h-11 items-center gap-32 border-b">
							<span class="-mb-1 min-w-36 font-semibold">Trim size</span>
							<span> {trimSize} </span>
						</div>
					</div>
				{/if}
			</div>
		</div>

		<div class="py-[var(--section-padding)]">
			<div
				class="mb-6 flex flex-col gap-4 px-[var(--container-padding)] sm:items-center sm:text-center md:mb-12 md:gap-5"
			>
				<h3 class="max-w-[12ch] text-2xl leading-[1.35cap]">
					<span class="font-ivy"> Bring </span> More to Your <span class="font-ivy">Home</span>
				</h3>
				<p class="max-w-[35ch] text-base leading-tight md:text-lg">
					Explore matching tones, textures, or collections.
				</p>
			</div>
			<div
				class="grid grid-cols-1 gap-8 px-[var(--container-padding)] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			>
				{#each $product.data.relatedProducts as p (p._id)}
					<article>
						<a href={`/products/${p.slug.current}`}>
							<div class="relative aspect-[4/5] w-full overflow-hidden">
								<img
									src={urlFor(p.image).width(920).format('webp').url()}
									alt=""
									class="absolute left-0 top-0 size-full scale-105 object-cover duration-[0.4s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform hover:scale-100"
									srcset={[
										`${urlFor(p.image).width(320).format('webp').url()} 320w`,
										`${urlFor(p.image).width(640).format('webp').url()} 640w`,
										`${urlFor(p.image).width(768).format('webp').url()} 768w`,
										`${urlFor(p.image).width(900).format('webp').url()} 900w`
									].join(', ')}
									sizes="(max-width: 640px) 320px, (max-width: 768px) 640px, (max-width: 1024px) 768px, 465px"
								/>
							</div>

							<h2 class="py-1 text-base font-medium underline">
								{p.name}
							</h2>
						</a>
					</article>
				{/each}
			</div>
		</div>
	</main>
{:else}
	<main
		class="flex min-h-svh flex-col items-center justify-center gap-6 px-[var(--container-padding)]"
	>
		<h1 class="font-ivy max-w-[15ch] text-center text-3xl leading-[1.3cap]">
			Oops! That Tile Doesn't Exist
		</h1>
		<p class="max-w-[54ch] text-center text-gray-500">
			It looks like the page you’re trying to reach isn’t available. Try exploring one of our other
			products.
		</p>
	</main>
{/if}
