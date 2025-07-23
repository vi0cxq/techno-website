import { env } from '$env/dynamic/public';
import type { Collection, Product } from '$lib/sanity/queries';
import groq from 'groq';

export async function GET({ locals }) {
	const base = env.PUBLIC_SITE_URL;
	const { loadQuery } = locals;

	const staticRoutes = [
		{ url: `${base}/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
		{
			url: `${base}/the-story`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{ url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
		{
			url: `${base}/showrooms`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.7
		},
		{ url: `${base}/journal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 }
	];

	const staticUrls = staticRoutes
		.map(
			({ url, lastModified, changeFrequency, priority }) => `
		<url>
			<loc>${url}</loc>
			<lastmod>${lastModified.toISOString()}</lastmod>
			<changefreq>${changeFrequency}</changefreq>
			<priority>${priority}</priority>
		</url>`
		)
		.join('\n');

	const collectionQuery = groq`*[_type == "collection"]{
        slug,
        "lastModified": _updatedAt
    }`;

	const collectionsData = await loadQuery<Collection[]>(collectionQuery);

	const collections =
		collectionsData?.data
			?.map(
				({ lastModified, slug }) => `
		<url>
			<loc>${base}/collections/${slug.current}</loc>
			<lastmod>${new Date(lastModified).toISOString()}</lastmod>
			<changefreq>monthly</changefreq>
			<priority>0.6</priority>
		</url>`
			)
			?.join('\n') ?? '';

	const productQuery = groq`*[_type == "product"]{
        slug
        "lastModified": _updatedAt
    }`;

	const productsData = await loadQuery<Product[]>(productQuery);

	const products =
		productsData?.data
			?.map(
				({ slug, lastModified }) => `
		<url>
			<loc>${base}/products/${slug.current}</loc>
			<lastmod>${new Date(lastModified).toISOString()}</lastmod>
			<changefreq>monthly</changefreq>
			<priority>0.5</priority>
		</url>`
			)
			?.join('\n') ?? '';

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
                    ${staticUrls}
                    ${collections}
                    ${products}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
