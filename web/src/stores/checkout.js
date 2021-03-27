import { derived, writable } from 'svelte/store';
import { dateSelectionController } from './checkout/date-selection';

function createCheckoutFlow() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0),
    set: (n) => set(n)
	};
}

function getStepNameForIndex(index, uiFields, totalSteps, flow){
  return index === 0
  ? uiFields.dateSelection
  : index === totalSteps - 1
  ? uiFields.miscItems
  : flow[index]['name'];
}

export function checkoutService(flow, uiFields){

  const totalSteps = flow.length + 2;
  const flowIndex = createCheckoutFlow();

  const hasNext = derived(
    flowIndex,
    $index => $index < totalSteps
  );

  const hasPrev = derived(
    flowIndex,
    $index => $index > 0
  );

  return derived(
  [
    flowIndex,
    hasNext,
    hasPrev,
    dateSelectionController
  ],
  ([
    index,
    $hasNext,
    $hasPrev,
    $dateSelectionController
  ]) => ({
    totalSteps,
    index,
    current: index + 1,
    hasNext: $hasNext,
    hasPrev: $hasPrev,
    stepName: getStepNameForIndex(index, uiFields, totalSteps, flow),
    next: () => flowIndex.increment(),
    prev: () => flowIndex.decrement(),
    goTo: (n) => flowIndex.set(n),
    datePicker: $dateSelectionController
  })
  )
}


export const rentalDatePreference = writable(null);
export const userShoppingCart = writable({});
export const rentTill = writable(null);
export const rentFrom = writable(null);
