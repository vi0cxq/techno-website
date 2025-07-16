<script lang="ts">
	import ParallaxImg from '$lib/components/parallax-img.svelte';
</script>

<section
	class="min-h-screen gap-[var(--gap)] px-[var(--container-padding)] py-[var(--section-padding)] md:flex"
>
	<div class="w-1/3">
		<h2 class="text-lg uppercase">about</h2>
	</div>

	<div class="flex-1">
		<p class="space-y-10 pt-3 text-xl font-medium md:w-[38ch] md:space-y-20 md:pt-0">
			<span class="inline-block">
				An innovation born from the innate drive to improve, renew, and reinvent the surfaces around
				us.
			</span>
			<span class="inline-block">
				Ceram blends advanced technology with a legacy of craftsmanship—an invitation to push past
				the limits of standardization and create a bold, contemporary, and timeless aesthetic.
			</span>

			<span class="inline-block">
				This is a "new" that’s defined not only by what it creates, but by how it’s created.A
				process. A philosophy. A lifestyle.
			</span>
		</p>
		<div class="trigger mt-10 flex items-start gap-[var(--gap)] md:mt-20">
			<ParallaxImg
				classname="relative aspect-[3/4] w-[clamp(12.5rem,-2.5rem+75vw,35rem)] overflow-hidden  md:w-[28rem] lg:w-[35rem]"
				targetId="parallax"
			>
				<enhanced:img
					src="/static/images/building_big.webp?w=1120;560"
					class="absolute left-0 top-[-5%] h-[115%] w-full object-cover will-change-transform"
					sizes="(min-width:1920px) 1120px, (min-width:768px) 560px, 50vw"
					alt="techno ceram"
					fetchpriority="high"
				/>
			</ParallaxImg>

			<ParallaxImg
				classname="relative aspect-[3/4] flex-1 overflow-hidden md:w-[14rem] md:flex-none"
				speed={0.02}
				targetId="parallax-2"
			>
				<enhanced:img
					src="/static/images/building_small.webp?w=448;224"
					class="absolute left-0 top-[-5%] h-[115%] w-full object-cover will-change-transform"
					sizes="(min-width:1920px) 448px, (min-width:768px) 224px, 50vw"
					alt="techno ceram"
					fetchpriority="high"
				/>
			</ParallaxImg>
		</div>
	</div>
</section>
