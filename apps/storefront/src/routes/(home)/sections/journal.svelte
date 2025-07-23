<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { type Post } from '$lib/sanity/queries';

	import { createQuery } from '@tanstack/svelte-query';
	import { client } from '$lib/sanity/client';
	import { featuredPostsQuery } from '$lib/sanity/queries';

	const getFeaturedPosts = async () => {
		const data = await client.fetch(featuredPostsQuery);
		return data as Post[];
	};

	const posts = createQuery<Post[], Error>({
		queryKey: ['featured-posts'],
		queryFn: () => getFeaturedPosts()
	});
</script>

<section
	class="bg-background-3 text-foreground-2 px-[var(--container-padding)] py-[var(--section-padding)]"
>
	<div
		class="flex flex-col gap-4 self-end sm:ml-auto sm:w-1/2 md:items-start md:pl-[calc(var(--gap)/2)] md:text-start"
	>
		<h3 class="w-full max-w-[15ch] text-2xl leading-[1.35cap] sm:-ml-1">
			Beyond the
			<span class="font-ivy"> Surface </span>
		</h3>
		<p class="w-full max-w-[45ch] text-base leading-tight md:text-lg">
			Insights from the world of ceramic, design, and beyond
		</p>
	</div>
	<div class="mt-10 flex flex-col items-start gap-10 md:flex-row md:gap-[var(--gap)] lg:mt-16">
		{#if $posts.status === 'pending'}
			{#each [0, 1] as key (key)}
				<article class="flex w-full flex-1 flex-col gap-1">
					<div class="relative aspect-[5/3] flex-1 animate-pulse overflow-hidden bg-gray-700"></div>
					<p class="mt-1 font-normal">Loading...</p>
				</article>
			{/each}
		{:else if $posts.status === 'success'}
			{#each $posts.data as post (post._id)}
				<article class="flex w-full flex-1 flex-col gap-1">
					<a href={`/journal/${post.slug.current}`}>
						<div class="relative aspect-[5/3] flex-1 overflow-hidden">
							<img
								src={urlFor(post.mainImage).width(950).format('webp').url()}
								alt=""
								class="absolute left-0 top-0 size-full scale-105 object-cover duration-[0.4s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform hover:scale-100"
								fetchpriority="high"
								srcset={[
									`${urlFor(post.mainImage).width(320).url()} 320w`,
									`${urlFor(post.mainImage).width(640).url()} 640w`,
									`${urlFor(post.mainImage).width(768).url()} 768w`,
									`${urlFor(post.mainImage).width(950).url()} 950w`
								].join(', ')}
								sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 950px"
							/>
						</div>
						<p class="mt-1 font-normal">{post.title}</p>
					</a>
				</article>
			{/each}
		{/if}
	</div>
</section>
