import { createRequestHandler, setServerClient } from '@sanity/svelte-loader';
import { sequence } from '@sveltejs/kit/hooks';
import { serverClient } from '$lib/server/sanity/client';
import type { Handle } from '@sveltejs/kit';

setServerClient(serverClient);

export const preload: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		preload: ({ type }) => {
			return type === 'font' || type === 'js' || type === 'css';
		}
	});
	return response;
};

export const sanity = createRequestHandler();

export const handle = sequence(preload, sanity);
