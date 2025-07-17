import type { ImageAsset, PortableTextBlock, Slug } from '@sanity/types';
import groq from 'groq';

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`;
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`;

export const featuredPostsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)[0...4]`;

export interface Post {
	_type: 'post';
	_id: string;
	slug: Slug;
	title: string;
	tags: string[];
	excerpt?: string;
	mainImage: ImageAsset;
	body: PortableTextBlock[];
	_createdAt: string;
}
export const showroomsQuery = groq`*[_type == "showroom"] | order(publishedAt desc) {
        _id,
        name,
        slug,
        location,
        description,
        publishedAt,
        image,
        "aspect_ratio": image.asset->metadata.dimensions.aspectRatio,
        "alt": name
    }
`;
export const featuredShowroomsQuery = groq`*[_type == "showroom"] | order(publishedAt desc)[0...3] {
        _id,
        name,
        slug,
        location,
        description,
        publishedAt,
        image,
        "aspect_ratio": image.asset->metadata.dimensions.aspectRatio,
        "alt": name
    }
`;

export type Showroom = {
	_id: string;
	name: string;
	slug: Slug;
	location: string;
	description: string;
	publishedAt: string;
	image: ImageAsset;
	aspect_ratio: number;
	alt: string;
};

export const tilesQuery = groq`*[
	_type == "product" 
	&& (!defined($collection) || $collection in collections[]->slug.current) 
] | order(_createdAt desc)`;

export const featuredProductsQuery = groq`*[_type == "product" && "featured-tiles" in collections[]->slug.current] | order(_createdAt desc) {
	_id,
    name,
    slug,
    image,
  }`;

export type Product = {
	_id: string;
	slug: Slug;
	name: string;
	description: PortableTextBlock[];
	image: ImageAsset;
	imageGallery: ImageAsset[];
	_createdAt: string;
};
