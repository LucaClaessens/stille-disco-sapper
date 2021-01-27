import watchMedia from "svelte-media";

const mediaqueries = {
    small: "(max-width: 767px)",
    medium: "(min-width: 768px)",
    large: "(min-width: 1024px)",
    short: "(max-height: 399px)",
    landscape: "(orientation: landscape) and (max-height: 499px)",
    tiny: "(orientation: portrait) and (max-height: 599px)",
    dark: "(prefers-color-scheme: dark)",
    noanimations: "(prefers-reduced-motion: reduce)"
};

export const media = watchMedia(mediaqueries);