const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: 'class',
    purge: {
        mode: 'all',
        content: ["./src/**/*.svelte", "./src/**/*.html"],
    },
    theme: {
        extend: {
            keyframes: {
                'shrink-in': {
                    '0%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(1)' },
                },
                'fadein-bottom': {
                    '0%': { transform: 'translateY(50px)', opacity: '0' },
                    '100%': { transform: 'translateY(0px)', opacity: '1' },
                }
            },
            animation: {
                'shrink-in': 'shrink-in 0.6s ease-out',
                'fadein-bottom': 'fadein-bottom 1s ease-out'
            },
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
                '3': '3 3 0%',
                'hidden': '0px'
            },
            fontFamily: {
                'sans': ['Libre Franklin', ...defaultTheme.fontFamily.sans],
                'heading': ['Roquefort', ' sans-serif']
            },
        },
    },
    variants: {
        scrollSnapType: ['responsive'],
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
