<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';

	import type { PageData } from './$types';
	import { urlFor } from '$lib/sanity/image';

	let { data }: { data: PageData } = $props();

	const query = $derived.by(() => {
		return useQuery(data);
	});
</script>

<main class="px-[var(--container-padding)] py-[var(--section-padding)]">
	<div class="border-foreground/30 border-b pb-8">
		<h3 class="w-full max-w-[15ch] text-2xl leading-[1.35cap] font-medium uppercase sm:-ml-1">
			journal
			<span class="font-ivy text-lg">({$query.data.length})</span>
		</h3>
	</div>
	<div class="grid grid-cols-1 items-start gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
		{#each $query.data as post (post._id)}
			<article>
				<a href={`/journal/${post.slug.current}`}>
					<div class="bg-muted relative aspect-[8/5] w-full overflow-hidden">
						<img
							src={urlFor(post.mainImage!).fit('max').url()}
							alt={post.title}
							fetchpriority="high"
							class="absolute top-0 left-0 size-full scale-105 object-cover duration-[0.4s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform hover:scale-100"
						/>
					</div>

					<h2 class="py-1 text-lg leading-tight font-medium underline">
						{post.title}
					</h2>
				</a>
			</article>
		{/each}
	</div>
</main>
