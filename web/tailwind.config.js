const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    mode: "all",
    content: ["./src/**/*.svelte", "./src/**/*.html"],
    options: {
      safelist: [
        "bg-red-pure",
        "bg-blue-pure",
        "bg-green-pure",
        "bg-red-pure-light",
        "bg-blue-pure-light",
        "bg-green-pure-light",
        "h-10",
        "h-2",
        "h-0",
        "h-12",
        "h-24",
        "h-48",
        "text-black",
        "text-white",
        "md:w-2",
        "md:w-10",
        "bg-gray-300",
        "bg-gray-100",
        "bg-white",
        "bg-black",
        "top-1/2",
        "-translate-y-1/2",
        "top-2",
      ],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
    },
  },
  theme: {
    extend: {
      keyframes: {
        "shrink-in": {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "fadein-bottom": {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
      animation: {
        "shrink-in": "shrink-in 0.6s ease-out",
        "fadein-bottom": "fadein-bottom 1s ease-out",
      },
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        sans: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
        heading: ["Roquefort", " sans-serif"],
      },
      colors: {
        orange: {
          500: "#ff3e00",
        },
        red: {
          pure: "#ff0000",
          "pure-light": "#ff7f7f",
        },
        green: {
          pure: "#00ff00",
          "pure-light": "#7fff7f",
        },
        blue: {
          pure: "#0000ff",
          25: "#faf8f6",
          "pure-light": "#7f7fff",
        },
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        hidden: "0px",
      },
    },
  },
  variants: {
    scrollSnapType: ["responsive"],
    extend: {
      opacity: ["disabled"],
      backgroundImage: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-scroll-snap")],
};
