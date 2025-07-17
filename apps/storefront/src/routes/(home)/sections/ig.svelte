<script lang="ts">
	import ParallaxImg from '$lib/components/parallax-img.svelte';
</script>

<section
	class="px-[var(--container-padding)] py-[var(--section-padding)] md:py-[calc(var(--section-padding)*2)]"
>
	<div class="flex size-full gap-10">
		<div class="hidden flex-1 items-start justify-center md:flex">
			<ParallaxImg classname="relative aspect-[4/5] w-2/3 ">
				<enhanced:img
					src="/static/images/building_big.webp?w=560"
					class="absolute left-0 top-[-5%] h-full w-full object-cover will-change-transform"
					sizes="(min-width:1440px) 560px, (min-width:768px) 560px, 50vw"
					alt="techno ceram"
				/>
			</ParallaxImg>
		</div>
		<div class="flex flex-[2.2] flex-col items-center gap-2">
			<h3
				class="z-10 -mb-8 max-w-[10ch] text-center text-2xl font-medium uppercase leading-[1.2cap]"
			>
				Connect With Us
			</h3>

			<ParallaxImg classname="relative aspect-square w-full overflow-hidden" targetId="parallax">
				<enhanced:img
					src="/static/images/building_big.webp?w=1120;560"
					class="absolute left-0 top-[-5%] h-[115%] w-full object-cover will-change-transform"
					sizes="(min-width:1920px) 920px, (min-width:768px) 560px, 50vw"
					alt="techno ceram"
				/>
			</ParallaxImg>

			<h3
				class="font-ivy z-10 -mt-8 max-w-[10ch] text-center text-3xl font-medium leading-[1.1cap] lg:-mt-12"
			>
				on <br />
				<a target="_blank" href="https://www.instagram.com/technoceramdz" class="underline">
					instagram
				</a>
			</h3>
		</div>
		<div class="hidden flex-1 items-end justify-center md:flex">
			<ParallaxImg classname="relative aspect-[6/4] w-2/3">
				<enhanced:img
					src="/static/images/building_big.webp?w=560"
					class="absolute left-0 top-[-5%] h-full w-full object-cover will-change-transform"
					sizes="(min-width:1440px) 560px, (min-width:768px) 560px, 50vw"
					alt="techno ceram"
				/>
			</ParallaxImg>
		</div>
	</div>
</section>
