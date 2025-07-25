import { PersistedState } from 'runed';

export class TransitionStore {
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

export const getTransitionStore = () => new TransitionStore();
