<script lang="ts">
	import { PUBLIC_SITE_URL } from '$env/static/public';

	import { MetaTags } from 'svelte-meta-tags';

	import About from './sections/about.svelte';
	import FeaturedProducts from './sections/featured-products.svelte';
	import Showrooms from './sections/showrooms.svelte';
	import Journal from './sections/journal.svelte';
	import Ig from './sections/ig.svelte';
</script>

<MetaTags
	title="Techno Ceram - Premium Ceramic Tiles"
	titleTemplate="%s"
	description="Techno Ceram offers premium ceramic tiles combining timeless design and high performance. Discover our unique collections."
	canonical={PUBLIC_SITE_URL}
	openGraph={{
		title: 'Techno Ceram',
		description:
			'Techno Ceram offers premium ceramic tiles combining timeless design and high performance. Discover our unique collections.',
		url: PUBLIC_SITE_URL,
		type: 'website',
		images: [
			{
				url: `${PUBLIC_SITE_URL}/og/home_og.jpg`,
				width: 1200,
				height: 648,
				alt: 'Techno Ceram - Premium Ceramic Tiles'
			}
		]
	}}
/>

<header class="relative flex min-h-screen items-end p-[var(--container-padding)]">
	<enhanced:img
		src="/static/images/ceram.webp?w=1920"
		alt="techno ceram"
		style="position: absolute; width: 100%; height: 100%; object-fit: cover; top: 0; left: 0;"
		fetchpriority="high"
		sizes="min(1920px, 100vw)"
	/>
	<div class="bg-foreground/20 absolute left-0 top-0 size-full"></div>
	<h1 class="text-background z-10 w-[15ch] text-5xl leading-[1.4cap]">
		Defining <span class="font-ivy">Spaces</span> with
		<span class="font-ivy"> Timeless </span>
		Elegance
	</h1>
</header>
<About />

<FeaturedProducts />
<Showrooms />
<Journal />
<Ig />
