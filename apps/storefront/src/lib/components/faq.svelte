<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { PortableText } from '@portabletext/svelte';

	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { faqQuery, type Faq } from '$lib/sanity/queries';
	import { client } from '$lib/sanity/client';

	let { collectionId, title }: { collectionId: string; title: string } = $props();

	const getFaqByCollection = async (collectionId: string) => {
		const data = await client.fetch(faqQuery, { collectionId });
		return data as Faq[];
	};

	const faq = $derived.by(() =>
		createQuery<Faq[], Error>({
			queryKey: ['faq', collectionId],
			queryFn: () => getFaqByCollection(collectionId)
		})
	);
</script>

{#if $faq.status === 'success' && $faq.data.length}
	<section
		class="flex flex-col gap-8 px-[var(--container-padding)] py-[var(--section-padding)] md:flex-row"
	>
		<div class="hidden flex-1 md:block">
			<div class="relative aspect-square">
				<enhanced:img
					src="/static/images/ceram.webp?w=1024;900;768;640;320"
					alt=""
					class="absolute left-0 top-0 size-full object-cover"
					sizes="(max-width: 640px) 320px, (max-width: 768px) 640px, (max-width: 1024px) 768px, (max-width: 1280px) 1024px, 950px"
				/>
			</div>
		</div>
		<div class="flex-1">
			<h3 class="font-ivy max-w-[15ch] text-2xl leading-[1.35cap]">{title} FAQs</h3>
			<Accordion.Root type="single" class="mt-4 md:mt-10">
				{#each $faq.data as item, i (item.question)}
					<Accordion.Item value={`${i}`} class="border-foreground/30">
						<Accordion.Trigger
							class="cursor-pointer items-center rounded-none py-5 text-lg leading-[1.2cap]"
						>
							{item.question}
						</Accordion.Trigger>
						<Accordion.Content class="pb-6 pt-2 ">
							<div class="prose [&_h1]:font-ivy max-w-[80ch] text-gray-600 [&_p]:text-base">
								<PortableText value={item.answer} />
							</div>
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</div>
	</section>
{/if}
