<script lang="ts">
	import founderImg from '$lib/assets/images/jimmy.jpg';
	import companyImg from '$lib/assets/images/company.webp';
</script>

<main class="pt-[calc(var(--section-padding)*1.5)] lg:pt-[calc(var(--section-padding)*2)]">
	<section class="px-[var(--container-padding)]">
		<p
			class="mx-auto text-xl leading-[1.5cap] md:indent-52 xl:indent-96 xl:text-[clamp(2rem,1.6rem+2vw,3rem)]"
		>
			TECHNO CERAM is a ceramic tile manufacturer whose bold approach, technical precision, and
			design-driven vision redefine the possibilities of modern surfaces across scale, space, and
			style.
		</p>
		<div
			class="flex flex-col gap-3 py-[var(--section-padding)] sm:flex-row sm:gap-8 lg:py-[calc(var(--section-padding)*1.5)]"
		>
			<div class="min-w-44 xl:min-w-96">
				<p class="font-medium uppercase">company</p>
			</div>
			<div class="flex-1">
				<p class="max-w-[55ch] space-y-8 text-base leading-normal">
					<span class="block">
						Established in 2017, TECHNO CERAM emerged as the second entity of a growing group
						committed to redefining ceramic craftsmanship in Algeria. Located in the Dhra Ben Sabah
						Industrial Zone in Tazoult, Batna, the 92,967 m² site is equipped with two cutting-edge
						production lines dedicated to manufacturing large-format, rectified, and extra-polished
						tiles. From the beginning, the goal was clear: to merge industrial strength with design
						intelligence.
					</span>
					<span class="block">
						Since July 2022, TECHNO CERAM has operated at a capacity of 6.6 million m²
						annually—delivering surfaces that blend timeless appeal with contemporary direction.
						From classic styles to avant-garde finishes, each tile reflects a philosophy of control,
						clarity, and material excellence. Today, TECHNO CERAM stands at the intersection of
						technology and aesthetics—where bold production meets quiet elegance.
					</span>
				</p>
			</div>
			<div class="hidden flex-[0.5] md:block xl:flex-1">
				<div class="relative aspect-[5/6] size-full">
					<img src={founderImg} alt="founder" srcset="" class="absolute size-full object-cover" />
				</div>
			</div>
		</div>
	</section>
	<div class="relative aspect-[5/6] w-full sm:aspect-[5/4] lg:aspect-video">
		<img src={companyImg} alt="founder" srcset="" class="absolute size-full object-cover" />
	</div>
	<section
		class="bg-background-3 text-foreground-2 px-[var(--container-padding)] py-[var(--section-padding)] lg:py-[calc(var(--section-padding)*1.5)]"
	>
		<div
			class="mb-24 flex flex-col justify-between gap-4 md:flex-row md:items-end md:self-end xl:ml-[26rem]"
		>
			<h3 class="w-full max-w-[15ch] text-2xl leading-[1.35cap] sm:-ml-1">
				<span class="font-ivy"> Built </span>
				on Scale & Precision
			</h3>
			<p class="w-full max-w-[50ch] text-base leading-snug md:text-sm">
				From design to delivery, we manufacture at scale with exacting standards.
			</p>
		</div>

		<div class="grid grid-cols-1 [grid-template-rows:auto_1fr] gap-x-8 gap-y-4 sm:grid-cols-2">
			<div class="border-foreground-2/30 flex flex-col gap-16 border-t py-8 md:gap-24">
				<p class="text-foreground-2/60 text-base uppercase">countries served</p>
				<p class="text-5xl font-medium">25+</p>
			</div>
			<div class="border-foreground-2/30 flex flex-col gap-16 border-t py-8 md:gap-24">
				<p class="text-foreground-2/60 text-base uppercase">annual tile production</p>
				<p class="text-5xl font-medium">6.6M m²</p>
			</div>
			<div class="border-foreground-2/30 flex justify-between border-t">
				<div class="flex flex-1 flex-col py-8">
					<p class="text-lg font-medium">99.9%</p>
					<p class="text-foreground-2/60 text-base">Quality control pass rate</p>
				</div>
				<div class="border-foreground-2/30 flex flex-1 flex-col border-l py-8 pl-8">
					<p class="text-lg font-medium">10+</p>
					<p class="text-foreground-2/60 text-base">Years of export experience</p>
				</div>
			</div>
			<div class="border-foreground-2/30 flex justify-between border-t">
				<div class="flex flex-1 flex-col py-8">
					<p class="text-lg font-medium">2</p>
					<p class="text-foreground-2/60 text-base">Production lines in Algeria</p>
				</div>
				<div class="border-foreground-2/30 flex flex-1 flex-col border-l py-8 pl-8">
					<p class="text-lg font-medium">1,200+</p>
					<p class="text-foreground-2/60 text-base">Tile designs available</p>
				</div>
			</div>
		</div>
	</section>
</main>
