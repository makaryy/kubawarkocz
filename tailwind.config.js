/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                text: "#e2e2e0",
                gondola: {
                    50: "#f9f5f3",
                    100: "#f1e8e3",
                    200: "#e2cfc6",
                    300: "#cfafa2",
                    400: "#bb8a7c",
                    500: "#ad7162",
                    600: "#a05f56",
                    700: "#854d49",
                    800: "#6d413f",
                    900: "#593635",
                    950: "#1a0f0f"
                }
            },
            boxShadow: {
                paper: "33px 33px 67px #bebebe,-33px -33px 67px #ffffff"
            },
            backgroundImage: {
                nav: "linear-gradient(180deg, #000, transparent 100%)"
            }
        }
    },
    plugins: []
};
