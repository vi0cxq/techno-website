<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import { getContext } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import type Lenis from 'lenis';

	import * as Accordion from '$lib/components/ui/accordion/index.js';

	import logo from '$lib/assets/svg/techno-ceram-logo.svg';
	import { page } from '$app/state';
	import { beforeNavigate } from '$app/navigation';

	const lenis = getContext<Lenis>('lenis');

	const transparentNavRoutes = ['/products/', '/collections/'];

	const desktop = new MediaQuery('min-width: 1024px');

	let scrolled = $state(false);
	let isProductPage = $derived(
		transparentNavRoutes.some((route) => page.url.pathname.startsWith(route))
	);

	import allImg from '$lib/assets/images/collections/all.webp?enhanced';
	import featImg from '$lib/assets/images/collections/feat.webp?enhanced';
	import newImg from '$lib/assets/images/collections/new.webp?enhanced';
	import wallImg from '$lib/assets/images/collections/wall.webp?enhanced';
	import floorImg from '$lib/assets/images/collections/floor.webp?enhanced';
	import bathroomImg from '$lib/assets/images/collections/bathroom.webp?enhanced';
	import outdoorImg from '$lib/assets/images/collections/outdoor.webp?enhanced';
	import kitchenImg from '$lib/assets/images/collections/kitchen.webp?enhanced';

	let navigation_data = [
		{
			title: 'Browse All',
			href: '/collections/browse-all',
			image: allImg
		},
		{
			title: 'New Arrivals',
			href: '/collections/new-arrivals',
			image: newImg
		},
		{
			title: 'Featured',
			href: '/collections/featured',
			image: featImg
		},
		{
			title: 'Bathroom Tiles',
			href: '/collections/bathroom-tiles',
			image: bathroomImg
		},
		{
			title: 'Kitchen Tiles',
			href: '/collections/kitchen-tiles',
			image: kitchenImg
		},
		{
			title: 'Wall Tiles',
			href: '/collections/wall-tiles',
			image: wallImg
		},
		{
			title: 'Floor Tiles',
			href: '/collections/floor-tiles',
			image: floorImg
		},
		{
			title: 'Outdoor Tiles',
			href: '/collections/outdoor-tiles',
			image: outdoorImg
		}
	];

	function createCollectionAnimation() {
		let animation: GSAPTimeline;

		return {
			to(): Attachment {
				return (element) => {
					const md = gsap.matchMedia();

					md.add('(min-width: 1024px)', () => {
						animation = gsap
							.timeline({ paused: true })
							.to('.collection_menu', {
								height: 'auto',
								duration: 0.8,
								ease: 'power4.out'
							})
							.to(
								element,
								{
									autoAlpha: 1,
									duration: 0.4,
									ease: 'power4.out'
								},
								'-=0.58'
							)
							.to(
								'.navigation_card',
								{
									autoAlpha: 1,
									duration: 0.4,
									stagger: 0.05,
									y: 0
								},
								'-=0.7'
							);
					});
				};
			},
			play() {
				animation.play();
				lenis.stop();
			},
			reverse() {
				animation.reverse();
				lenis.start();
			},
			invalidate() {
				animation?.invalidate();
			}
		};
	}

	function createMenuAnimation() {
		let animation: GSAPTimeline;

		return {
			to(): Attachment {
				return (element) => {
					const md = gsap.matchMedia();

					md.add('(max-width: 1024px)', () => {
						animation = gsap
							.timeline({ paused: true })
							.to(element, {
								width: '100%',
								duration: 0.8,
								ease: 'power4.out'
							})
							.to(
								'.menu_link',
								{
									autoAlpha: 1,
									duration: 0.4,
									stagger: 0.05,
									y: 0
								},
								'-=0.7'
							)
							.reverse();
					});
				};
			},

			toggle() {
				if (animation.reversed()) {
					animation.play();
					lenis.stop();
				} else {
					animation.reverse();
					lenis.start();
				}
			}
		};
	}

	function createNavAnimation() {
		return {
			to(): Attachment {
				return (element) => {
					const showNav = gsap
						.from(element, {
							yPercent: -100,
							paused: true,
							duration: 0.3
						})
						.progress(1);

					ScrollTrigger.create({
						start: 'top top',
						end: 'max',
						onUpdate: (self) => {
							// eslint-disable-next-line @typescript-eslint/no-unused-expressions
							self.direction === -1 ? showNav.play() : showNav.reverse();
						}
					});
				};
			}
		};
	}

	const collectionAnimation = createCollectionAnimation();
	const menuAnimation = createMenuAnimation();
	const navAnimation = createNavAnimation();

	beforeNavigate(() => {
		collectionAnimation.reverse();
	});
</script>

<nav
	class={[
		'bg-background fixed z-[100] flex h-12 w-full items-center justify-between px-[var(--container-padding)] transition-colors duration-300 lg:h-11',
		isProductPage && !scrolled && 'bg-transparent'
	]}
	{@attach navAnimation.to()}
>
	<a href="/">
		<img src={logo} alt="techno ceram" class="size-6" />
	</a>
	<ul
		class={[
			'hidden items-center gap-3 text-xs font-medium uppercase lg:flex',
			isProductPage && !scrolled && 'text-foreground'
		]}
	>
		<li
			onmouseenter={() => collectionAnimation.play()}
			onmouseleave={() => collectionAnimation.reverse()}
		>
			<p class="group relative cursor-pointer overflow-hidden tracking-wider">
				<span
					class="block transition-transform duration-[0.6s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform group-hover:-translate-y-full"
				>
					collections
				</span>
				<span
					class="absolute left-0 top-0 w-full translate-y-full transition-transform duration-[0.6s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform group-hover:translate-y-0"
				>
					collections
				</span>
			</p>
		</li>
		<li>
			<a
				href="/showrooms"
				class="group relative block cursor-pointer overflow-hidden tracking-wider"
			>
				<span
					class="block transition-transform duration-[0.6s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform group-hover:-translate-y-full"
				>
					showrooms
				</span>
				<span
					class="absolute left-0 top-0 w-full translate-y-full transition-transform duration-[0.6s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform group-hover:translate-y-0"
				>
					showrooms
				</span>
			</a>
		</li>
		<li>
			<a
				href="/the-story"
				class="group relative block cursor-pointer overflow-hidden tracking-wider"
			>
				<span
					class="block transition-transform duration-[0.6s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform group-hover:-translate-y-full"
				>
					the story
				</span>
				<span
					class="absolute left-0 top-0 w-full translate-y-full transition-transform duration-[0.6s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform group-hover:translate-y-0"
				>
					the story
				</span>
			</a>
		</li>
		<li>
			<a href="/journal" class="group relative block cursor-pointer overflow-hidden tracking-wider">
				<span
					class="block transition-transform duration-[0.6s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform group-hover:-translate-y-full"
				>
					journal
				</span>
				<span
					class="absolute left-0 top-0 w-full translate-y-full transition-transform duration-[0.6s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform group-hover:translate-y-0"
				>
					journal
				</span>
			</a>
		</li>
		<li>
			<a href="/contact" class="group relative block cursor-pointer overflow-hidden tracking-wider">
				<span
					class="block transition-transform duration-[0.6s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform group-hover:-translate-y-full"
				>
					contact
				</span>
				<span
					class="absolute left-0 top-0 w-full translate-y-full transition-transform duration-[0.6s] ease-[cubic-bezier(.16,1,.3,1)] will-change-transform group-hover:translate-y-0"
				>
					contact
				</span>
			</a>
		</li>
	</ul>
	<button
		class="font-ivy bg-background-3 text-foreground-2 cursor-pointer rounded-full px-3 py-1 text-base lg:hidden"
		onclick={() => {
			menuAnimation.toggle();
		}}
	>
		Menu
	</button>
</nav>

<div
	class="bg-background-3 text-foreground-2 fixed left-0 top-0 z-50 min-h-screen w-0 overflow-hidden lg:hidden"
	{@attach menuAnimation.to()}
>
	<div
		class="flex flex-col px-[var(--container-padding)] py-[calc(var(--container-padding)+3.5rem)]"
	>
		<ul>
			<li class="menu_link invisible">
				<a
					href="/"
					class="border-foreground-2/20 inline-block w-full border-b py-5 text-xl uppercase leading-[1.2cap]"
				>
					Home
				</a>
			</li>
			<li class="menu_link invisible">
				<Accordion.Root type="single">
					<Accordion.Item value="item-1">
						<Accordion.Trigger
							class="border-foreground-2/20 cursor-pointer items-center rounded-none border-b py-5 text-xl uppercase leading-[1.2cap]"
						>
							collections
						</Accordion.Trigger>
						<Accordion.Content class="grid grid-cols-1 gap-3 py-3 sm:grid-cols-2">
							{#each navigation_data as tile (tile.title)}
								<a href={`/collections/${tile.title}`} class="text-muted text-lg">
									{tile.title}
								</a>
							{/each}
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			</li>
			<li class="menu_link invisible">
				<a
					href="/showrooms"
					class="border-foreground-2/20 inline-block w-full border-b py-5 text-xl uppercase leading-[1.2cap]"
				>
					showrooms
				</a>
			</li>
			<li class="menu_link invisible">
				<a
					href="/journal"
					class="border-foreground-2/20 inline-block w-full border-b py-5 text-xl uppercase leading-[1.2cap]"
				>
					journal
				</a>
			</li>
			<li class="menu_link invisible">
				<a
					href="/the-story"
					class="border-foreground-2/20 inline-block w-full border-b py-5 text-xl uppercase leading-[1.2cap]"
				>
					the story
				</a>
			</li>
			<li class="menu_link invisible">
				<a
					href="/contact"
					class="border-foreground-2/20 inline-block w-full border-b py-5 text-xl uppercase leading-[1.2cap]"
				>
					contact
				</a>
			</li>
		</ul>
	</div>
</div>

{#if desktop}
	<div
		{@attach collectionAnimation.to()}
		class="bg-background-3/70 invisible fixed left-0 top-0 z-40 h-screen w-full"
		id="overlay"
	></div>

	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		onmouseenter={() => collectionAnimation.play()}
		onmouseleave={() => collectionAnimation.reverse()}
		class="bg-background collection_menu fixed left-0 top-0 z-50 h-0 w-full overflow-hidden"
		id="collection_menu"
	>
		<div
			class="grid grid-cols-4 gap-8 px-[var(--container-padding)] py-[calc(var(--container-padding)+3.5rem)]"
		>
			{#each navigation_data as tile (tile.title)}
				<a href={tile.href} class="navigation_card invisible translate-y-4">
					<div class="flex flex-col gap-1">
						<div class="relative aspect-[4/2.3] flex-1 overflow-hidden">
							<enhanced:img
								src={tile.image}
								alt={tile.title}
								class="size-full object-cover"
								sizes="(min-width:1024px) 450px, 100vw"
							/>
						</div>
						<p class="text-sm font-medium underline">{tile.title}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
{/if}

<svelte:window
	onresize={() => {
		collectionAnimation.invalidate();
	}}
	onscroll={(e) => {
		scrolled = e.currentTarget.scrollY > 50;
	}}
/>
