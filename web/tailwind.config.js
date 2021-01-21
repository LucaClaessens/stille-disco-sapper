const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: 'class',
    purge: {
        mode: 'all',
        content: ["./src/**/*.svelte", "./src/**/*.html"],
    },
    theme: {
        fontFamily: {
            'sans': ['IBM\\ Plex\\ Sans', ...defaultTheme.fontFamily.sans]
        },
        extend: {
            backgroundImage: theme => ({
                'landing-events': "url('/landing/events.jpg')",
                'landing-rental': "url('/landing/rental.png')",
            }),
            zIndex: {
                '-1': '-1'
            },
            colors: {
                orange: {
                    500: "#ff3e00",
                },
                red: {
                    'pure': '#ff0000'
                },
                green: {
                    'pure': '#00ff00'
                },
                blue: {
                    'pure': '#0000ff',
                    25: "#faf8f6"
                }
            },
            flex: {
                '2': '2 2 0%',
                'hidden': '0px'
            }
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            backgroundImage: ['hover', 'focus'],
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss-scroll-snap')
    ],
};
