<script lang="ts">
	import footerImg from '$lib/assets/images/footer.webp';
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
			<div class="flex gap-10 sm:gap-15 md:flex-1">
				<div>
					<p class="mb-2 text-sm font-bold uppercase">Company</p>
					<ul class="flex flex-col gap-0.5 text-sm">
						<li>
							<a href="http://">Facebook</a>
						</li>
						<li>
							<a href="http://">Instagram</a>
						</li>
						<li>
							<a href="http://">TikTok</a>
						</li>
					</ul>
				</div>
				<div>
					<p class="mb-2 text-sm font-bold uppercase">social</p>
					<ul class="flex flex-col gap-0.5 text-sm">
						<li>
							<a href="http://">Facebook</a>
						</li>
						<li>
							<a href="http://">Instagram</a>
						</li>
						<li>
							<a href="http://">TikTok</a>
						</li>
					</ul>
				</div>
				<div>
					<p class="mb-2 text-sm font-bold uppercase">Legal</p>
					<ul class="flex flex-col gap-0.5 text-sm">
						<li>
							<a href="http://">Facebook</a>
						</li>
						<li>
							<a href="http://">Instagram</a>
						</li>
						<li>
							<a href="http://">TikTok</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="absolute top-8 left-1/2 hidden lg:top-[var(--container-padding)] lg:block">
				<img src={logoImg} alt="" srcset="" class="w-7 object-cover object-center" />
			</div>

			<div class="flex flex-1 justify-end">
				<div class="bg-background-3 flex h-full w-full flex-col gap-0.5 sm:max-w-[20rem]">
					<div class="relative size-full">
						<img
							src={footerImg}
							alt=""
							srcset=""
							class="absolute top-0 left-0 size-full object-cover object-bottom"
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
			<img
				src={footerImg}
				alt=""
				srcset=""
				class="absolute top-0 left-0 size-full object-cover object-bottom"
			/>
		</div>
	</div>
</footer>
