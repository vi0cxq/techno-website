<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	import { useQuery } from '@sanity/svelte-loader';

	import type { PageData } from './$types';

	import PortableImage from '$lib/components/portable-image.svelte';
	import { formatDate } from '$lib/sanity/utils';

	let { data }: { data: PageData } = $props();

	const query = $derived.by(() => {
		return useQuery(data);
	});
</script>

<article class="px-[var(--container-padding)] py-[var(--section-padding)]">
	<header class="border-foreground/30 mx-auto flex max-w-3xl flex-col gap-3 border-b pb-6">
		<h1 class="font-ivy text-xl leading-[1.5cap] font-medium sm:-ml-1">
			{$query.data.title}
		</h1>
		<p class="text-sm text-gray-600 italic">{formatDate($query.data._createdAt)}</p>
	</header>
	<section
		class="prose text-foreground [&_h1]:font-ivy mx-auto my-6 max-w-3xl [&_img]:m-0 [&_p]:text-base"
	>
		<PortableText
			components={{
				types: {
					image: PortableImage
				}
			}}
			value={$query.data.body}
		/>
	</section>
</article>
