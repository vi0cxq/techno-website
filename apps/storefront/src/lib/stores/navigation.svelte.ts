// This variable is preserved across internal navigations in SvelteKit
let firstLoad = true;

export function isFirstLoad() {
	if (typeof window === 'undefined') return true;

	if (firstLoad) {
		firstLoad = false;
		return true;
	}

	return false;
}
