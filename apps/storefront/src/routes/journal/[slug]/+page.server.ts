import { postQuery as query, type Post } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const { slug } = event.params;

	const params = { slug };
	const initial = await loadQuery<Post>(query, params);

	return {
		query,
		options: {
			initial
		},
		params
	};
};
