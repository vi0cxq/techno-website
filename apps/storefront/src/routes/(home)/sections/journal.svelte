<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { type Post } from '$lib/sanity/queries';

	let { posts }: { posts: Post[] } = $props();
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
		{#each posts as post (post._id)}
			<article class="flex w-full flex-1 flex-col gap-1">
				<a href={`/journal/${post.slug.current}`}>
					<div class="relative aspect-[5/3] flex-1 overflow-hidden">
						<img
							src={urlFor(post.mainImage).width(1840).format('webp').url()}
							alt={post.title}
							class="absolute left-0 top-0 size-full scale-105 object-cover duration-[0.4s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform hover:scale-100"
							fetchpriority="high"
							sizes="(min-width:1024px) 1840px, (min-width:768px) 480px, 100vw"
							srcset="
    								{urlFor(post.mainImage).width(480).url()} 480w,
    								{urlFor(post.mainImage).width(920).url()} 920w,
    								{urlFor(post.mainImage).width(1840).url()} 1840w,
    								{urlFor(post.mainImage).width(2760).url()} 2760w"
						/>
					</div>
					<p class="mt-1 font-normal">{post.title}</p>
				</a>
			</article>
		{/each}
	</div>
</section>
