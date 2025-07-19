import { productQuery, type Product } from '$lib/sanity/queries';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;

	const { slug } = event.params;

	const initial = await loadQuery<Product>(productQuery, { slug });

	if (!initial) {
		throw error(404, 'Product not found');
	}

	return {
		query: productQuery,
		options: { initial },
		params: {
			slug
		}
	};
};
