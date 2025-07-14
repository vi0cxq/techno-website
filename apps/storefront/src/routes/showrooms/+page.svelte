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
			showrooms
			<span class="font-ivy text-lg">({$query.data.length})</span>
		</h3>
	</div>
	<div
		class="grid grid-cols-1 items-start gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
	>
		{#each $query.data as showroom, i (showroom._id)}
			<article>
				<a target="_blank" href={`${showroom.location}`}>
					<p class="mb-1 font-medium">
						({i})
					</p>
					<div
						class="bg-muted relative aspect-auto w-full overflow-hidden"
						style="padding-top: {100 / showroom.aspect_ratio}%;"
					>
						<img
							src={urlFor(showroom.image).fit('max').width(800).url()}
							alt={showroom.name}
							fetchpriority="high"
							class="absolute top-0 left-0 size-full scale-105 object-cover duration-[0.4s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform hover:scale-100"
						/>
					</div>

					<h2 class="py-1 text-base font-medium underline">
						{showroom.name}
					</h2>
				</a>
			</article>
		{/each}
	</div>
</main>
