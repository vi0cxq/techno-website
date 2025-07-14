/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { LoaderLocals } from '@sanity/svelte-loader';
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Locals extends LoaderLocals {}
	}
}

export {};
