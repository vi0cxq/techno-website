<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { useQuery } from '@sanity/svelte-loader';
	import { MetaTags } from 'svelte-meta-tags';
	import { PUBLIC_SITE_URL } from '$env/static/public';

	import PortableImage from '$lib/components/portable-image.svelte';
	import { formatDate } from '$lib/sanity/utils';

	import type { PageData } from './$types';
	import { urlFor } from '$lib/sanity/image';

	let { data }: { data: PageData } = $props();

	const query = $derived.by(() => {
		return useQuery(data);
	});

	const { excerpt, mainImage, _createdAt, title, slug, tags, body } = $query.data;
</script>

<MetaTags
	{title}
	titleTemplate="%s | Techno Ceram"
	description={excerpt}
	canonical={`${PUBLIC_SITE_URL}/journal/${slug.current}`}
	openGraph={{
		title,
		description: excerpt,
		url: `${PUBLIC_SITE_URL}/journal/${slug.current}`,
		type: 'article',
		article: {
			publishedTime: _createdAt,
			authors: [PUBLIC_SITE_URL],
			tags
		},
		images: [
			{
				url: urlFor(mainImage).width(850).height(650).url(),
				width: 850,
				height: 650,
				alt: mainImage.label
			}
		]
	}}
/>

<article class="px-[var(--container-padding)] py-[var(--section-padding)]">
	<header class="border-foreground/30 mx-auto flex max-w-3xl flex-col gap-3 border-b pb-6">
		<h1 class="font-ivy text-2xl font-medium leading-[1.5cap] sm:-ml-1 lg:text-xl">
			{title}
		</h1>
		<p class="text-sm italic text-gray-600">{formatDate(_createdAt)}</p>
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
			value={body}
		/>
	</section>
</article>
