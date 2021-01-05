// postcss.config.js

const tailwind = require('tailwindcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const presetEnv = require('postcss-preset-env')({
    features: {
        // enable nesting
        'nesting-rules': true,
    },
});

const plugins =
    process.env.NODE_ENV === 'production'
        // Only autoprefix and minimize in production, saves us some of that schmancy time
        ? [tailwind, presetEnv, cssnano, autoprefixer]
        : [tailwind, presetEnv];

module.exports = { plugins };