<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';

	import type { PageData } from './$types';
	import { urlFor } from '$lib/sanity/image';
	import { MetaTags } from 'svelte-meta-tags';
	import { PUBLIC_SITE_URL } from '$env/static/public';

	let { data }: { data: PageData } = $props();

	const query = $derived.by(() => {
		return useQuery(data);
	});
</script>

<MetaTags
	title="Journal"
	titleTemplate="%s | Techno Ceram"
	description="Insights, inspirations, and updates from the world of ceramic tile design and innovation."
	canonical={`${PUBLIC_SITE_URL}/journal`}
	openGraph={{
		title: 'Journal | Techno Ceram',
		description:
			'Insights, inspirations, and updates from the world of ceramic tile design and innovation.',
		url: `${PUBLIC_SITE_URL}/journal`,
		type: 'website',
		images: [
			{
				url: `${PUBLIC_SITE_URL}/og/home_og.jpg`,
				width: 1200,
				height: 630,
				alt: 'Techno Ceram Journal'
			}
		]
	}}
/>

<main class="px-[var(--container-padding)] py-[var(--section-padding)]">
	<div class="border-foreground/30 border-b pb-4">
		<h3 class="w-full max-w-[15ch] text-2xl font-medium uppercase leading-[1.35cap] sm:-ml-1">
			journal
			<span class="font-ivy text-lg">({$query.data.length})</span>
		</h3>
	</div>
	<div class="grid grid-cols-1 items-start gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
		{#each $query.data as post (post._id)}
			<article>
				<a href={`/journal/${post.slug.current}`}>
					<div class="bg-muted relative aspect-[8/5] w-full overflow-hidden">
						<img
							src={urlFor(post.mainImage!).fit('max').url()}
							alt={post.title}
							fetchpriority="high"
							class="absolute left-0 top-0 size-full scale-105 object-cover duration-[0.4s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform hover:scale-100"
						/>
					</div>

					<h2 class="py-1 text-lg font-medium leading-tight underline">
						{post.title}
					</h2>
				</a>
			</article>
		{/each}
	</div>
</main>
