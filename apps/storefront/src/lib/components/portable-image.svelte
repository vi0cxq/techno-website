<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { getImageDimensions } from '@sanity/asset-utils';
	let { portableText } = $props();
	const value = portableText.value;
	let altText = $derived(value?.label || 'Image');

	let dimensions = getImageDimensions(value.asset);
</script>

{#if value?.asset._ref}
	<figure class="my-6">
		<div class="bg-muted relative w-full" style="aspect-ratio: {dimensions.aspectRatio};">
			<img
				src={urlFor(value.asset).fit('max').url()}
				alt={altText}
				class="absolute block size-full object-cover"
			/>
		</div>
		{#if value?.label}
			<figcaption class="mt-1 text-sm text-gray-600 italic">
				{value.label}
			</figcaption>
		{/if}
	</figure>
{:else}
	<div class="my-6 rounded bg-gray-100 p-4">
		<p class="text-muted">Image could not be loaded</p>
	</div>
{/if}
