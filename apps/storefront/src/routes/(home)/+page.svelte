<script lang="ts">
	import FeaturedProducts from './sections/featured-products.svelte';
	import Ig from './sections/ig.svelte';
	import Journal from './sections/journal.svelte';
	import Showrooms from './sections/showrooms.svelte';

	import type { PageData } from './$types';

	import { useQuery } from '@sanity/svelte-loader';

	let { data }: { data: PageData } = $props();

	const query = $derived.by(() => {
		return useQuery(data);
	});
</script>

<header
	class="relative flex min-h-screen items-end justify-start bg-[url($lib/assets/images/ceram.webp)] bg-cover p-[var(--container-padding)]"
>
	<div class="bg-foreground/20 absolute top-0 left-0 size-full"></div>
	<h1 class="text-background z-10 w-[15ch] text-5xl leading-[1.4cap]">
		Defining <span class="font-ivy">Spaces</span> with
		<span class="font-ivy"> Timeless </span>
		Elegance
	</h1>
</header>
<section
	class="min-h-screen gap-[var(--gap)] px-[var(--container-padding)] py-[var(--section-padding)] md:flex"
>
	<div class="w-1/3">
		<p class="text-lg uppercase">about</p>
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
		<div class="mt-10 flex items-start gap-[var(--gap)] md:mt-20">
			<div
				class="aspect-[3/4] w-[clamp(12.5rem,-2.5rem+75vw,35rem)] bg-pink-800 md:w-[28rem] md:bg-red-700 lg:w-[35rem]"
			></div>
			<div class="aspect-[3/4] flex-1 bg-green-900 md:w-[14rem] md:flex-none"></div>
		</div>
	</div>
</section>

<FeaturedProducts />
<Showrooms showrooms={$query.data} />
<Journal />
<Ig />
