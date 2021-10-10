import { writable, derived } from "svelte/store";

export const hoveredSection = writable(null);
export const activeSection = writable(null);

export const navigationData = writable(null);
export const footerData = writable(null);
export const globalSettings = writable(null);
export const activePath = writable(null);
export const scaleLogo = writable(null);

export const onHomepage = derived(
  activePath,
  ($path) => $path.match(new RegExp("/", "gi")).length === 1
);
