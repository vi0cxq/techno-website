export type TransitionState = 'start' | 'end' | 'first';

let isTransition = $state<TransitionState>('first');

export const getIsTransition = () => isTransition;
export const updateIsTransition = (value: TransitionState) => (isTransition = value);
