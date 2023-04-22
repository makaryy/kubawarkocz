/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                bg: " #e0e0e0",
            },
            boxShadow: {
                paper: "33px 33px 67px #bebebe,-33px -33px 67px #ffffff",
            },
        },
    },
    plugins: [],
};
