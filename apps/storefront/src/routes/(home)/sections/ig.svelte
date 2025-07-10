<script lang="ts">
	import midImg from '$lib/assets/images/tile-ig.webp';
</script>

<section
	class="px-[var(--container-padding)] py-[var(--section-padding)] md:py-[calc(var(--section-padding)*2)]"
>
	<div class="flex size-full gap-10">
		<div class="hidden flex-1 items-start justify-center md:flex">
			<div class="relative aspect-[4/5] w-2/3 bg-blue-500">
				<img src={midImg} alt="" class="absolute size-full object-cover object-center" />
			</div>
		</div>
		<div class="flex flex-[2.2] flex-col items-center gap-2">
			<h3
				class="z-10 -mb-8 max-w-[10ch] text-center text-2xl leading-[1.2cap] font-medium uppercase"
			>
				Connect With Us
			</h3>

			<div class="relative aspect-square w-full bg-blue-500">
				<img src={midImg} alt="" class="absolute size-full object-cover object-center" />
			</div>
			<h3
				class="font-ivy z-10 -mt-12 max-w-[10ch] text-center text-2xl leading-[1.35cap] font-medium"
			>
				on instagram
			</h3>
		</div>
		<div class="hidden flex-1 items-end justify-center md:flex">
			<div class="relative aspect-[6/4] w-2/3 bg-blue-500">
				<img src={midImg} alt="" class="absolute size-full object-cover object-center" />
			</div>
		</div>
	</div>
</section>
