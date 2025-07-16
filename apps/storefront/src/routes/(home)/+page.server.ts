import { homepageQuery as query, type HomePage } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const initial = await loadQuery<HomePage>(query);

	return {
		query,
		options: { initial }
	};
};
