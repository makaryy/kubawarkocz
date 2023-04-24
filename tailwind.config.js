/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                main: "#4C0013",
                secondary: "#897172",
                light: "#BFA5A6",
                dark: "#222500",
                accent: "#4C5213"
            },
            boxShadow: {
                paper: "33px 33px 67px #bebebe,-33px -33px 67px #ffffff"
            }
        }
    },
    plugins: []
};
