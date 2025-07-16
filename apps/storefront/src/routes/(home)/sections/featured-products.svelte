<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { Product } from '$lib/sanity/queries';
	import { urlFor } from '$lib/sanity/image';

	// width : 360 dpr : 1

	let options: EmblaOptionsType = { loop: false, align: 'start' };

	let { featuredProducts }: { featuredProducts: Product[] } = $props();

	let progressRef: HTMLDivElement;
	let emblaApi = $state<EmblaCarouselType>();
	let progress = $state(0);
	let canScrollPrev = $state(false);
	let canScrollNext = $state(true);

	function onInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
	}

	const scrollPrev = (): void => {
		emblaApi?.scrollPrev();
	};
	const scrollNext = (): void => {
		emblaApi?.scrollNext();
	};

	$effect(() => {
		if (emblaApi) {
			emblaApi.on('scroll', () => {
				progress = Math.max(0, Math.min(1, emblaApi!.scrollProgress()));
				progressRef!.style.width = `${progress * 100}%`;
				canScrollNext = emblaApi!.canScrollNext();
				canScrollPrev = emblaApi!.canScrollPrev();
			});
		}
	});
</script>

<section class="bg-background-2 min-h-screen py-[var(--section-padding)]">
	<div
		class="mb-12 flex flex-col gap-4 px-[var(--container-padding)] sm:items-center sm:text-center md:gap-7"
	>
		<h3 class="max-w-[15ch] text-2xl leading-[1.35cap]">
			Exceptional tiles for
			<span class="font-ivy"> every space </span>
		</h3>
		<p class="max-w-[45ch] text-base leading-tight md:text-lg">
			Explore premium designs crafted for durability and style, perfect for transforming any room
			into a masterpiece.
		</p>
	</div>
	<div class="carousel">
		<div
			class="carousel__viewport"
			use:emblaCarouselSvelte={{
				options,
				plugins: []
			}}
			onemblaInit={onInit}
		>
			<div class="carousel__container">
				{#each featuredProducts as product (product._id)}
					<div class="carousel__slide">
						<article>
							<a href={`/products/${product.slug.current}`}>
								<div class="relative aspect-[4/5] w-full overflow-hidden">
									<img
										src={urlFor(product.image).maxWidth(1200).format('webp').quality(80).url()}
										alt=""
										class="absolute left-0 top-0 size-full scale-105 object-cover duration-[0.4s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform hover:scale-100"
										sizes="(min-width:768px) 360px, 100vw"
										srcset="
												{urlFor(product.image).width(540).format('webp').url()} 540w,
												{urlFor(product.image).width(1080).format('webp').url()} 1080w,
												"
									/>
								</div>

								<h2 class="py-1 text-base font-medium underline">
									{product.name}
								</h2>
							</a>
						</article>
					</div>
				{/each}
			</div>
		</div>
		<div class="controllers mt-10 gap-4">
			<div class="controllers__progress">
				<div bind:this={progressRef} class="controllers__progress-bar"></div>
			</div>
			<div class="flex gap-2">
				<button
					class="bg-background-3 hover:bg-background-3/90 flex size-9 cursor-pointer items-center justify-center rounded-full"
					type="button"
					aria-label="Previous"
					onclick={scrollPrev}
					disabled={!canScrollPrev}
				>
					<ChevronLeft class="text-foreground-2" size={22} />
				</button>

				<button
					class="bg-background-3 hover:bg-background-3/90 flex size-9 cursor-pointer items-center justify-center rounded-full"
					type="button"
					aria-label="Next"
					onclick={scrollNext}
					disabled={!canScrollNext}
				>
					<ChevronRight size={22} class="text-foreground-2" />
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	.carousel {
		max-width: 100%;

		--slide-height: 19rem;

		--slide-spacing: 1rem;
		--slide-spacing-md: 1rem;
		--slide-spacing-lg: 1rem;
		--slide-spacing-xl: 2.5rem;

		--slide-size: calc(100% / 1.16);
		--slide-size-md: calc(100% / 2.16);
		--slide-size-lg: calc(100% / 3.16);
		--slide-size-xl: calc(100% / 4.8);
	}

	.carousel__viewport {
		overflow: hidden;
		padding-left: var(--container-padding);
	}

	.carousel__container {
		backface-visibility: hidden;
		display: flex;
		touch-action: pan-y pinch-zoom;
		margin-left: calc(var(--slide-spacing-xl) * -1);
	}

	.carousel__slide {
		min-width: 0;
		flex: 0 0 var(--slide-size-xl);
		padding-left: var(--slide-spacing-xl);
	}

	.controllers {
		display: flex;
		align-items: center;
		padding-inline: var(--container-padding);
	}

	.controllers__progress {
		height: 1px;
		width: 100%;
		background-color: rgb(201, 201, 201, 60%);
		position: relative;
	}

	.controllers__progress-bar {
		height: 100%;
		width: 0%;
		top: 0;
		left: 0;
		position: absolute;
		background-color: var(--foreground);
	}

	@media (max-width: 1024px) {
		.carousel__container {
			margin-left: calc(var(--slide-spacing-lg) * -1);
		}

		.carousel__slide {
			flex: 0 0 var(--slide-size-lg);
			padding-left: var(--slide-spacing-lg);
		}
	}

	@media (max-width: 768px) {
		.carousel__container {
			margin-left: calc(var(--slide-spacing-md) * -1);
		}

		.carousel__slide {
			flex: 0 0 var(--slide-size-md);
			padding-left: var(--slide-spacing-md);
		}
	}

	@media (max-width: 590px) {
		.carousel__container {
			margin-left: calc(var(--slide-spacing) * -1);
		}

		.carousel__slide {
			flex: 0 0 var(--slide-size);
			padding-left: var(--slide-spacing);
		}
	}
</style>
