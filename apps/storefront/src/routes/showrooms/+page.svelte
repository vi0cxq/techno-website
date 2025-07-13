<script lang="ts">
	const showrooms = Array.from({ length: 8 }, (_, i) => {
		const width = Math.floor(Math.random() * (800 - 400) + 400); // 400–800px
		const height = Math.floor(Math.random() * (600 - 300) + 300); // 300–600px
		return {
			id: i + 1,
			name: `Showroom ${i + 1}`,
			image: `https://picsum.photos/${width}/${height}?random=${i + 1}`,
			aspectRatio: `${width}/${height}`
		};
	});
</script>

<main class="px-[var(--container-padding)] py-[var(--section-padding)]">
	<div
		class="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
	>
		{#each showrooms as tile, i (tile.id)}
			<article>
				<a href="/">
					<p class="mb-1 font-medium">
						({i})
					</p>
					<div class="relative aspect-auto w-full bg-red-700">
						<img
							src={tile.image}
							alt={tile.name}
							class="size-full object-cover"
							fetchpriority="high"
						/>
					</div>

					<h2 class="py-1 text-base font-medium underline">
						{tile.name}
					</h2>
				</a>
			</article>
		{/each}
	</div>
</main>
