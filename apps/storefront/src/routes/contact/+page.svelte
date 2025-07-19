<script lang="ts">
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Contact Us"
	titleTemplate="%s | Techno Ceram"
	description="Get in touch with Techno Ceram for inquiries, support, or showroom visits. We’re here to help."
	canonical={`${PUBLIC_SITE_URL}/contact`}
	openGraph={{
		title: 'Contact Us | Techno Ceram',
		description:
			'Get in touch with Techno Ceram for inquiries, support, or showroom visits. We’re here to help.',
		url: `${PUBLIC_SITE_URL}/contact`,
		type: 'website',
		images: [
			{
				url: `${PUBLIC_SITE_URL}/og/home_og.jpg`,
				width: 1200,
				height: 630,
				alt: 'Techno Ceram Contact'
			}
		]
	}}
/>

<main>
	<section class="flex min-h-screen flex-col md:flex-row">
		<div
			class="border-foreground/30 flex flex-col justify-between gap-4 border-b px-[var(--container-padding)] pb-20 pt-28 md:flex-1 md:border-b-0 md:border-r"
		>
			<h3 class="max-w-[10ch] text-5xl leading-[1.35cap]">
				Get in Touch
				<span class="font-ivy"> Touch </span>
			</h3>
			<p class="max-w-[45ch] text-base uppercase leading-tight md:text-lg">
				Whether you’re planning a project or have a question, we’re here to help.
			</p>
		</div>
		<div class="flex flex-1 flex-col pt-[var(--container-padding)] md:pt-12">
			<div
				class="border-foreground/30 flex-1 border-b px-[var(--container-padding)] py-8 md:p-[var(--container-padding)]"
			>
				<p class="mb-2 text-xl font-medium uppercase">Location</p>
				<a class="underline" href="https://maps.app.goo.gl/VfGXMUXP11jkRhtu5" target="_blank">
					J7F5+P66, Codiet Esfaa RN03, Fesdis 05078, Batna, Algeria
				</a>
			</div>
			<div
				class="border-foreground/30 flex-1 border-b px-[var(--container-padding)] py-8 md:p-[var(--container-padding)]"
			>
				<p class="mb-2 text-xl font-medium uppercase">contact</p>
				<ul class="flex flex-col gap-2">
					<li>
						<a class="underline" href="mailto:info@technoceram.com" title="info@technoceram.com">
							info@technoceram.com
						</a>
					</li>
					<li>
						<a class="underline" href="tel:+213560042920" title="0560 04 29 20">0560 04 29 20</a>
					</li>
				</ul>
			</div>
			<div class="flex-1 px-[var(--container-padding)] py-8 md:p-[var(--container-padding)]">
				<p class="mb-2 text-xl font-medium uppercase">social</p>
				<ul class="flex flex-col gap-2">
					<li>
						<a class="underline" href="https://www.facebook.com/Technoceramdz">Facebook</a>
					</li>
					<li>
						<a class="underline" href="https://www.instagram.com/technoceramdz">Instagram</a>
					</li>
					<li>
						<a class="underline" href="https://www.tiktok.com/@technoceram_dz">TikTok</a>
					</li>
					<li>
						<a class="underline" href="https://www.youtube.com/@technoceramdz">Youtube</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</main>
