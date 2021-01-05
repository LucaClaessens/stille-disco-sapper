const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {

    purge: {
        mode: 'all',
        content: ["./src/**/*.svelte", "./src/**/*.html"],
    },
    theme: {
        fontFamily: {
            'sans': ['IBM\\ Plex\\ Sans', ...defaultTheme.fontFamily.sans]
        },
        extend: {
            colors: {
                orange: {
                    500: "#ff3e00",
                },
                blue: {
                    25: "#faf8f6"
                }
            },
        },
    },
    variants: {},
    plugins: [],
};
