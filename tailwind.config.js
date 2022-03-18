/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

// eslint-disable-next-line no-undef
module.exports = {
    content: [
        "./components/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
    ],
    darkMode: "media",
    theme: {
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
    },
    variants: {},
    plugins: [],
};
