<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
</script>

<div
	class="flex flex-col gap-10 px-[var(--container-padding)] py-[var(--section-padding)] md:flex-row md:gap-28"
>
	<div class="hidden flex-1 md:block">
		<div class="relative aspect-square">
			<enhanced:img
				src="/static/images/ceram.webp?w=2560"
				alt=""
				class="absolute left-0 top-0 size-full object-cover"
			/>
		</div>
	</div>
	<div class="flex-1">
		<h3 class="font-ivy max-w-[15ch] text-2xl leading-[1.35cap]">Floor Tile FAQs</h3>
		<Accordion.Root type="single" class="mt-4 md:mt-10">
			<Accordion.Item value="item-1" class="border-foreground/30">
				<Accordion.Trigger
					class=" cursor-pointer items-center rounded-none py-5 text-lg leading-[1.2cap]"
				>
					What’s the best type of tile for high-traffic areas?
				</Accordion.Trigger>
				<Accordion.Content class="pb-6 pt-2">
					<p class="max-w-[80ch] text-base">
						Porcelain tiles are a great choice—they're dense, durable, and resistant to wear, making
						them ideal for busy spaces like kitchens, hallways, and commercial settings.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2" class="border-foreground/30">
				<Accordion.Trigger
					class=" cursor-pointer items-center rounded-none py-5 text-lg leading-[1.2cap]"
				>
					What’s the best type of tile for high-traffic areas?
				</Accordion.Trigger>
				<Accordion.Content class="pb-6 pt-2">
					<p class="max-w-[80ch] text-base">
						Porcelain tiles are a great choice—they're dense, durable, and resistant to wear, making
						them ideal for busy spaces like kitchens, hallways, and commercial settings.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3" class="border-foreground/30">
				<Accordion.Trigger
					class=" cursor-pointer items-center rounded-none py-5 text-lg leading-[1.2cap]"
				>
					What’s the best type of tile for high-traffic areas?
				</Accordion.Trigger>
				<Accordion.Content class="pb-6 pt-2">
					<p class="max-w-[80ch] text-base">
						Porcelain tiles are a great choice—they're dense, durable, and resistant to wear, making
						them ideal for busy spaces like kitchens, hallways, and commercial settings.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-4" class="border-foreground/30">
				<Accordion.Trigger
					class=" cursor-pointer items-center rounded-none py-5 text-lg leading-[1.2cap]"
				>
					What’s the best type of tile for high-traffic areas?
				</Accordion.Trigger>
				<Accordion.Content class="pb-6 pt-2">
					<p class="max-w-[80ch] text-base">
						Porcelain tiles are a great choice—they're dense, durable, and resistant to wear, making
						them ideal for busy spaces like kitchens, hallways, and commercial settings.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-5" class="border-foreground/30">
				<Accordion.Trigger
					class="cursor-pointer items-center rounded-none py-5 text-lg leading-[1.2cap]"
				>
					What’s the best type of tile for high-traffic areas?
				</Accordion.Trigger>
				<Accordion.Content class="pb-6 pt-2">
					<p class="max-w-[80ch] text-base">
						Porcelain tiles are a great choice—they're dense, durable, and resistant to wear, making
						them ideal for busy spaces like kitchens, hallways, and commercial settings.
					</p>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>
</div>
