<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { type Showroom } from '$lib/sanity/queries';

	import { createQuery } from '@tanstack/svelte-query';
	import { client } from '$lib/sanity/client';
	import { featuredShowroomsQuery } from '$lib/sanity/queries';

	const getFeaturedShowrooms = async () => {
		const data = await client.fetch(featuredShowroomsQuery);
		return data as Showroom[];
	};

	const showrooms = createQuery<Showroom[], Error>({
		queryKey: ['featured-showrooms'],
		queryFn: () => getFeaturedShowrooms()
	});
</script>

<section class="py-[var(--section-padding)]">
	<div class="flex flex-col gap-4 px-[var(--container-padding)] sm:items-center sm:text-center">
		<h3 class="max-w-[10ch] text-2xl leading-[1.35cap]">
			Step Inside the
			<span class="font-ivy"> Detail </span>
		</h3>
		<p class="max-w-[45ch] text-base leading-tight md:text-lg">
			Explore settings that reveal the full potential of our large‑format surfaces.
		</p>
	</div>
	<div
		class="grid grid-cols-1 items-start gap-6 px-[var(--container-padding)] pt-10 sm:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:pt-16"
	>
		{#if $showrooms.status === 'pending'}
			{#each [1.5, 0.85, 1.501] as key (key)}
				<article>
					<div class="animate-pulse bg-gray-300" style="padding-top: {100 / key}%;"></div>

					<h2 class="py-1 text-base font-medium underline">Loading...</h2>
				</article>
			{/each}
		{:else if $showrooms.status === 'success' && $showrooms.data}
			{#each $showrooms.data as showroom (showroom._id)}
				<article>
					<a target="_blank" href={`${showroom.location}`}>
						<div
							class="bg-muted relative overflow-hidden"
							style="padding-top: {100 / showroom.aspect_ratio}%;"
						>
							<img
								src={urlFor(showroom.image).width(1280).format('webp').url()}
								alt=""
								class="absolute left-0 top-0 size-full scale-105 object-cover duration-[0.4s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform hover:scale-100"
								fetchpriority="high"
								srcset={[
									`${urlFor(showroom.image).width(320).url()} 320w`,
									`${urlFor(showroom.image).width(640).url()} 640w`,
									`${urlFor(showroom.image).width(768).url()} 768w`,
									`${urlFor(showroom.image).width(900).url()} 900w`,
									`${urlFor(showroom.image).width(1024).url()} 1024w`,
									`${urlFor(showroom.image).width(1280).url()} 1280w`
								].join(', ')}
								sizes="(max-width: 640px) 320px, (max-width: 768px) 640px, (max-width: 1024px) 768px, (max-width: 1280px) 1024px, 950px"
							/>
						</div>

						<h2 class="py-1 text-base font-medium underline">
							{showroom.name}--
							{showroom.aspect_ratio}
						</h2>
					</a>
				</article>
			{/each}
		{/if}
	</div>
</section>
