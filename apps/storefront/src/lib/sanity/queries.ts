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

export const productsQuery = groq`*[
  _type == "product"
  && (!defined($collection) || $collection in collections[]->slug.current)
]
| order(_createdAt desc)`;

export const featuredProductsQuery = groq`*[_type == "product" && "featured-tiles" in collections[]->slug.current] | order(_createdAt desc) {
	_id,
    name,
    slug,
    image,
  }`;

export const productQuery = groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  image,
  imageGallery,
  description,
  details {
    material->{
      _id,
      name
    },
    color->{
      _id,
      name
    },
    shape->{
      _id,
      name
    },
    dimensions,
    thickness,
    tilesPerSqMetre,
    tilesPerBox,
    coveragePerBox,
    finish,
    texture,
    wallOrFloorTile,
    area,
    glazed,
    requiresSealing,
    frostProof,
    rectifiedEdge,
	antiSlipRating,
    fireHearthsSurround,
    trimSize
  },
  collections[]->{
    _id,
    title
  },
  relatedProducts[]->{
    _id,
    name,
    slug,
    image
  }
}`;

export type Ref = {
	_id: string;
	name: string;
};

export type Details = {
	material: Ref;
	shape: Ref;
	dimensions: string;
	thickness: string;
	tilesPerSqMetre: string;
	tilesPerBox: string;
	coveragePerBox: string;
	color: Ref;
	finish: string;
	texture: string;
	wallOrFloorTile: 'Wall' | 'Floor' | 'Both';
	area: string;
	glazed: boolean;
	antiSlipRating: string;
	requiresSealing: boolean;
	frostProof: boolean;
	rectifiedEdge: boolean;
	fireHearthsSurround: boolean;
	trimSize: string;
};

export type Product = {
	_id: string;
	slug: Slug;
	name: string;
	description: PortableTextBlock[];
	details: Details;
	image: ImageAsset;
	imageGallery: ImageAsset[];
	_createdAt: string;
	relatedProducts: Product[];
};

export const collectionQuery = groq`*[_type == "collection" && slug.current == $slug][0]{
	_id,
	slug,
	name,
	description,
	image,
	handpickedProducts[]->{
    _id,
    name,
    slug,
    image
  }
}`;

export type Collection = {
	_id: string;
	slug: Slug;
	name: string;
	description: string;
	image: ImageAsset;
	handpickedProducts: Product[];
};

export const faqQuery = groq`*[_type == "faq" && $collectionId in relatedCollections[]._ref]{
  question,
  answer
}`;

export type Faq = {
	answer: PortableTextBlock[];
	question: string;
};
