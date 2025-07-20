<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { innerWidth } from 'svelte/reactivity/window';

	let trigger: HTMLElement;
	let target: HTMLElement;
	let { children, classname, speed = 0.1, targetId = '#parallax', reversed = false } = $props();

	onMount(() => {
		const ctx = gsap.context(() => {
			const mm = gsap.matchMedia();
			const y = innerWidth.current! * speed;

			mm.add(
				{
					isDesktop: '(min-width: 769px)',
					isMobile: '(max-width: 768px)'
				},
				() => {
					// let { isMobile } = ctx.conditions!;

					gsap
						.timeline({
							scrollTrigger: {
								id: targetId,
								trigger,
								scrub: true,
								start: 'top bottom',
								end: 'bottom top',
								invalidateOnRefresh: true
								// markers: true
							}
						})
						.fromTo(target, { y: reversed ? y : -y }, { y: reversed ? -y : y, ease: 'none' });
				}
			);

			return () => ctx.revert();
		});
	});
</script>

<div class={[classname]} bind:this={trigger}>
	<div bind:this={target} class="size-full">
		{@render children()}
	</div>
</div>
