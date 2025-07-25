<script lang="ts">
	import Faq from '$lib/components/faq.svelte';
	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types';
	import { urlFor } from '$lib/sanity/image';

	import { createQuery } from '@tanstack/svelte-query';
	import { client } from '$lib/sanity/client';
	import { productsQuery, type Product } from '$lib/sanity/queries';
	import { MetaTags } from 'svelte-meta-tags';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/state';

	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { onMount } from 'svelte';
	import { getTransitionStore } from '$lib/stores/transition.svelte';

	let { data }: { data: PageData } = $props();

	const collection = $derived.by(() => {
		return useQuery(data);
	});

	const getProductsByCollection = async (slug: string) => {
		const data = await client.fetch(productsQuery, { collection: slug });
		return data as Product[];
	};

	const products = $derived.by(() =>
		createQuery<Product[], Error>({
			queryKey: ['products', data.params.slug],
			queryFn: () => getProductsByCollection(data.params.slug)
		})
	);

	const title = $collection.data ? $collection.data.name : 'Not Found';
	const description = $collection.data
		? $collection.data.description
		: 'Explore our diverse ceramic tile collections, from classic to avant-garde styles, crafted for modern living.';

	let container = $state<HTMLElement>();

	let transition = getTransitionStore();

	const delay = transition.delay.current ? 1.4 : 0.2;

	onMount(() => {
		const ctx = gsap.context(() => {
			gsap.set(['.s1', '.s2'], { autoAlpha: 1 });
			let split: GSAPTween;

			SplitText.create(['.s1', '.s2'], {
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

			gsap.to('.img', {
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
	{title}
	titleTemplate="%s | Techno Ceram"
	{description}
	canonical={`${PUBLIC_SITE_URL}/collection/${page.params.slug}`}
	openGraph={{
		title,
		description,
		url: `${PUBLIC_SITE_URL}/collections/${page.params.slug}`,
		type: 'website',
		images: [
			{
				url: $collection.data
					? `${urlFor($collection.data.image).width(1200).height(630).format('jpg')}`
					: `${PUBLIC_SITE_URL}/og/home_og.jpg`,
				width: 1200,
				height: 630,
				alt: title
			}
		]
	}}
/>

{#if $collection.data}
	<main class="pt-[var(--section-padding)]" bind:this={container}>
		<div
			class="mb-6 flex flex-col gap-4 px-[var(--container-padding)] sm:items-center sm:text-center md:mb-12 md:gap-5"
		>
			<h3 class="font-ivy s1 max-w-[15ch] text-2xl leading-[1.35cap] opacity-0">
				{$collection.data.name}
			</h3>
			<p class="s2 max-w-[45ch] text-base leading-tight opacity-0 md:text-lg">
				{$collection.data.description}
			</p>
		</div>
		<div class="px-[var(--container-padding)]">
			<div class="relative aspect-[5/6] w-full overflow-hidden md:aspect-[10/4]">
				<img
					src={urlFor($collection.data.image).maxWidth(1920).format('webp').url()}
					alt={$collection.data.name}
					class="img absolute left-0 top-0 size-full scale-125 object-cover opacity-0"
					fetchpriority="high"
					srcset={[
						`${urlFor($collection.data.image).width(320).format('webp').url()} 320w`,
						`${urlFor($collection.data.image).width(640).format('webp').url()} 640w`,
						`${urlFor($collection.data.image).width(768).format('webp').url()} 768w`,
						`${urlFor($collection.data.image).width(1024).format('webp').url()} 1024w`,
						`${urlFor($collection.data.image).width(1366).format('webp').url()} 1366w`,
						`${urlFor($collection.data.image).width(1600).format('webp').url()} 1600w`,
						`${urlFor($collection.data.image).width(1920).format('webp').url()} 1920w`
					].join(', ')}
					sizes="(max-width: 640px) 100vw, 
						(max-width: 768px) 100vw, 
						(max-width: 1024px) 100vw, 
						(max-width: 1440px) 90vw, 
						95vw"
				/>
			</div>
		</div>
		<div class="mb-5 mt-8 flex items-center justify-between px-[var(--container-padding)] md:mt-14">
			<p class="text-sm font-medium">({$products.data ? $products.data.length : 0})</p>
			<!-- <button class="text-sm font-medium underline"> FILTER OPTIONS </button> -->
		</div>
		<div
			class="relative mb-[var(--section-padding)] grid grid-cols-1 gap-x-8 gap-y-8 px-[var(--container-padding)] sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12 xl:grid-cols-4"
		>
			{#if $products.status === 'pending'}
				{#each Array.from({ length: 8 }, (_, i) => i) as key (key)}
					<article>
						<div class="relative aspect-[4/5] w-full animate-pulse bg-gray-300"></div>

						<h2 class="py-1 text-base font-medium underline">Loading..</h2>
					</article>
				{/each}
			{:else if $products.status === 'success' && !$products.data.length}
				<div
					class="col-start-1 col-end-5 flex min-h-svh flex-col items-center justify-center gap-6"
				>
					<h3 class="font-ivy max-w-[15ch] text-center text-3xl leading-[1.3cap]">
						Nothing Here Yet
					</h3>
					<p class="max-w-[54ch] text-center text-gray-500">
						This collection is currently empty. Please check back soon or explore other collections.
					</p>
				</div>
			{:else if $products.status === 'success'}
				{#each $products.data as product (product._id)}
					<article>
						<a href={`/products/${product.slug.current}`}>
							<div class="relative aspect-[4/5] w-full overflow-hidden">
								<img
									src={urlFor(product.image).width(920).format('webp').url()}
									alt=""
									class="absolute left-0 top-0 size-full scale-105 object-cover duration-[0.4s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform hover:scale-100"
									srcset={[
										`${urlFor(product.image).width(320).format('webp').url()} 320w`,
										`${urlFor(product.image).width(640).format('webp').url()} 640w`,
										`${urlFor(product.image).width(768).format('webp').url()} 768w`,
										`${urlFor(product.image).width(900).format('webp').url()} 900w`
									].join(', ')}
									sizes="(max-width: 640px) 320px, (max-width: 768px) 640px, (max-width: 1024px) 768px, 465px"
								/>
							</div>

							<h2 class="py-1 text-base font-medium underline">
								{product.name}
							</h2>
						</a>
					</article>
				{/each}
			{/if}
		</div>

		{#if $products.data && $products.data.length}
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
				<div class="grid grid-cols-1 gap-8 px-[var(--container-padding)] sm:grid-cols-2 md:gap-8">
					{#each $collection.data.handpickedProducts as product (product.slug.current)}
						<article>
							<a href={`/products/${product.slug.current}`}>
								<div class="relative aspect-[4/5] w-full overflow-hidden">
									<img
										src={urlFor(product.image).width(1280).format('webp').url()}
										alt=""
										class="absolute left-0 top-0 size-full scale-105 object-cover duration-[0.4s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform hover:scale-100"
										fetchpriority="high"
										srcset={[
											`${urlFor(product.image).width(320).url()} 320w`,
											`${urlFor(product.image).width(640).url()} 640w`,
											`${urlFor(product.image).width(768).url()} 768w`,
											`${urlFor(product.image).width(900).url()} 900w`,
											`${urlFor(product.image).width(1024).url()} 1024w`,
											`${urlFor(product.image).width(1280).url()} 1280w`
										].join(', ')}
										sizes="(max-width: 640px) 320px, (max-width: 768px) 640px, (max-width: 1024px) 768px, (max-width: 1280px) 1024px, 950px"
									/>
								</div>

								<h2 class="py-1 text-base font-medium underline">
									{product.name}
								</h2>
							</a>
						</article>
					{/each}
				</div>
			</div>

			<Faq collectionId={$collection.data._id} title={$collection.data.name} />
		{/if}
	</main>
{:else}
	<main
		class="flex min-h-svh flex-col items-center justify-center gap-6 px-[var(--container-padding)]"
	>
		<h1 class="font-ivy max-w-[15ch] text-center text-3xl leading-[1.3cap]">
			Oops! That Collection Doesn't Exist
		</h1>
		<p class="max-w-[54ch] text-center text-gray-500">
			It looks like the page you’re trying to reach isn’t available. Try exploring one of our other
			collections.
		</p>
	</main>
{/if}
