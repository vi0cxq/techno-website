export type TransitionState = 'start' | 'end' | 'first';

let isTransition = $state<TransitionState>('first');
let isPreloading = $state<boolean>(true);

export const getIsTransition = () => isTransition;
export const updateIsTransition = (value: TransitionState) => (isTransition = value);

export const getIsPreloading = () => isPreloading;
export const updateIsPreloading = (value: boolean) => (isPreloading = value);

import { PersistedState } from 'runed';

export class NavigationStore {
	loader = new PersistedState('loader', true);
	delay = new PersistedState('delay', false);

	addDelay() {
		this.delay.current = true;
	}
	removeDelay() {
		this.delay.current = false;
	}

	showLoader() {
		this.loader.current = true;
	}

	hideLoader() {
		this.loader.current = false;
	}
}

export const getNavigationStore = () => new NavigationStore();
