import { writable } from 'svelte/store';

export const rentalDatePreference = writable(null);
export const userShoppingCart = writable({});
export const rentTill = writable(null);
export const rentFrom = writable(null);