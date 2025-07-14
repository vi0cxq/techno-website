import { showroomsQuery as query, type Showroom } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const initial = await loadQuery<Showroom[]>(query);

	return {
		query,
		options: { initial }
	};
};
