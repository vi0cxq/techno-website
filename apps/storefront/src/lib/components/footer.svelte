<script lang="ts">
	import titleImg from '$lib/assets/svg/techno-ceram-title.svg';
	import logoImg from '$lib/assets/svg/techno-ceram-logo.svg';
</script>

<footer class="bg-background-2 fixed bottom-0 left-0 z-0 flex h-screen w-full flex-col">
	<div
		class="relative flex flex-1 flex-col px-[var(--container-padding)] py-8 md:p-[var(--container-padding)]"
	>
		<div
			class="mb-8 flex flex-1 flex-col justify-between gap-8 sm:flex-row md:mb-[var(--container-padding)] md:gap-[var(--container-padding)]"
		>
			<div class="sm:gap-15 flex gap-10 md:flex-1">
				<div>
					<p class="mb-2 text-sm font-bold uppercase">Company</p>
					<ul class="flex flex-col gap-1.5 text-sm">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/the-story">The Story</a>
						</li>
						<li>
							<a href="/showrooms">Showrooms</a>
						</li>
						<li>
							<a href="/journal">Journal</a>
						</li>
						<li>
							<a href="/contact">Contact</a>
						</li>
					</ul>
				</div>
				<div>
					<p class="mb-2 text-sm font-bold uppercase">social</p>
					<ul class="flex flex-col gap-1.5 text-sm">
						<li>
							<a target="_blank" href="https://www.facebook.com/Technoceramdz">Facebook</a>
						</li>
						<li>
							<a target="_blank" href="https://www.instagram.com/technoceramdz">Instagram</a>
						</li>
						<li>
							<a target="_blank" href="https://www.tiktok.com/@technoceram_dz">TikTok</a>
						</li>
						<li>
							<a target="_blank" href="https://www.youtube.com/@technoceramdz">Youtube</a>
						</li>
					</ul>
				</div>
				<div>
					<p class="mb-2 text-sm font-bold uppercase">legal</p>
					<ul class="flex flex-col gap-1.5 text-sm">
						<li>
							<a href="/">Privacy Policy</a>
						</li>
						<li>
							<a href="/">Terms & Conditions</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="absolute left-1/2 top-8 hidden lg:top-[var(--container-padding)] lg:block">
				<img src={logoImg} alt="techno ceram" class="w-7 object-cover object-center" />
			</div>

			<div class="hidden flex-1 justify-end md:flex">
				<div class="bg-background-3 flex h-full w-full flex-col gap-0.5 sm:max-w-[20rem]">
					<div class="relative size-full">
						<enhanced:img
							src="/static/images/story_building.webp?w=640"
							alt="techno ceram"
							sizes="(min-width:768px) 640px, 100vw"
							class="absolute left-0 top-0 size-full object-cover object-bottom"
						/>
					</div>

					<a
						class="text-foreground-2 px-1 py-1.5 text-sm underline"
						href="https://maps.app.goo.gl/VfGXMUXP11jkRhtu5"
						target="_blank"
					>
						J7F5+P66, Codiet Esfaa RN03, Fesdis 05078, Batna, Algeria
					</a>
				</div>
			</div>
		</div>
		<div class="border-foreground/50 border-t pt-[var(--container-padding)]">
			<img src={titleImg} alt="" srcset="" class="w-full object-cover object-center" />
		</div>
	</div>
	<div class="h-[45vh] w-full">
		<div class="relative size-full">
			<enhanced:img
				src="/static/images/footer.webp?w=1920;1600;1200;800;400"
				alt="techno ceram"
				sizes="min(1920px, 100vw)"
				class="absolute left-0 top-0 size-full object-cover object-bottom"
				fetchpriority="low"
				loading="lazy"
			/>
		</div>
	</div>
</footer>
