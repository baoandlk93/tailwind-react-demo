/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Inter var', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [
        '@tailwindcss/forms',
        '@tailwindcss/aspect-ratio',

    ],
}

