import { writable } from 'svelte/store';

export const hoveredSection = writable(null);
export const activeSection = writable(null);

export const navigationData = writable(null);
export const footerData = writable(null);
export const globalSettings = writable(null);
export const activePath = writable(null);