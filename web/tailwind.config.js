const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: 'class',
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        mode: 'all',
        content: ["./src/**/*.svelte", "./src/**/*.html"],
        options: {
            safelist: ['bg-red-pure', 'bg-blue-pure', 'bg-green-pure', 'h-10', 'h-2', 'text-black', 'text-white', 'md:w-2', 'md:w-10'],
            blocklist: [/^debug-/],
            keyframes: true,
            fontFace: true,
        },
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
            zIndex: {
                '-1': '-1'
            },
            fontFamily: {
                'sans': ['Libre Franklin', ...defaultTheme.fontFamily.sans],
                'heading': ['Roquefort', ' sans-serif']
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
                2: '2 2 0%',
                3: '3 3 0%',
                'hidden': '0px'
            }
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
