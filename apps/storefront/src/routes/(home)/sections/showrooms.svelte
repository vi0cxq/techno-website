<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { type Showroom } from '$lib/sanity/queries';

	let { showrooms }: { showrooms: Showroom[] } = $props();
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
		{#each showrooms as showroom (showroom._id)}
			<article>
				<a target="_blank" href={`${showroom.location}`}>
					<div
						class="bg-muted relative overflow-hidden"
						style="padding-top: {100 / showroom.aspect_ratio}%;"
					>
						<img
							src={urlFor(showroom.image).width(1840).format('webp').url()}
							alt={showroom.name}
							class="absolute left-0 top-0 size-full scale-105 object-cover duration-[0.4s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform hover:scale-100"
							fetchpriority="high"
							sizes="(min-width:1024px) 1840px, (min-width:768px) 480px, 100vw"
							srcset="
    								{urlFor(showroom.image).width(480).url()} 480w,
    								{urlFor(showroom.image).width(920).url()} 920w,
    								{urlFor(showroom.image).width(1840).url()} 1840w,
    								{urlFor(showroom.image).width(2760).url()} 2760w"
						/>
					</div>

					<h2 class="py-1 text-base font-medium underline">
						{showroom.name}
					</h2>
				</a>
			</article>
		{/each}
	</div>
</section>
