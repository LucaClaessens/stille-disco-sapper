import { derived, writable } from "svelte/store";

function createMiscItemCounter() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

function createMiscValidator(stores) {
  return derived(
    ...stores.map(store => store.validator),
    $validators => $validators.every(validator => validator === true)
  )
}

function createMiscItemStore(item){

  const counter = createMiscItemCounter();

  return {
    id: item.id,
    counter,
    validator: createCartItemValidator(item, counter),
    data: item
  }
}

function createCartItemValidator(item, counter){
  return derived(
    counter,
    $counter => $counter.value > item.min && $counter.value < item.max && $counter.value < item.apiMax
  )
}

export function createMiscStore(items){
  const miscItemStores = items.map(i => createMiscItemStore(item));

  return {
    getItem: (id) => miscItemStores.find(store => store.id === id),
    getAll: () => miscItemStores,
    validator: createMiscValidator(miscItemStores),
  }
}
