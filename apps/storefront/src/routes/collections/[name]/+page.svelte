<script lang="ts">
	import { page } from '$app/state';
	import { tiles } from '$lib/data';
	import headerImage from '$lib/assets/images/ceram.webp';
	import Faq from '$lib/components/faq.svelte';

	let handpicked = tiles.slice(0, 4);
</script>

<main class="pt-[var(--section-padding)]">
	<div
		class="mb-6 flex flex-col gap-4 px-[var(--container-padding)] sm:items-center sm:text-center md:mb-12 md:gap-5"
	>
		<h3 class="font-ivy max-w-[15ch] text-2xl leading-[1.35cap]">
			{page.params.name}
		</h3>
		<p class="max-w-[45ch] text-base leading-tight md:text-lg">
			Explore premium designs crafted for durability and style, perfect for transforming any room
			into a masterpiece.
		</p>
	</div>
	<div class="px-[var(--container-padding)]">
		<div class="relative aspect-[5/4] w-full overflow-hidden md:aspect-[10/4]">
			<img
				src={headerImage}
				alt=""
				srcset=""
				class="absolute top-0 left-0 size-full object-cover object-center"
			/>
		</div>
	</div>
	<div class="mt-14 mb-5 flex items-center justify-between px-[var(--container-padding)]">
		<p class="text-sm font-medium">(50)</p>
		<button class="text-sm font-medium underline"> FILTER OPTIONS </button>
	</div>
	<div
		class="mb-[var(--section-padding)] grid grid-cols-1 gap-6 px-[var(--container-padding)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
	>
		{#each tiles as tile (tile.id)}
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
