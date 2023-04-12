/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            "kumbh-sans": ["Kumbh Sans", "sans-serif"],
        },
        colors: {
            transparent: "transparent",
            white: "#ffffff",
            "dark-cyan": "hsl(185, 75%, 39%)",
            "very-dark-d-blue": "hsl(229, 23%, 23%)",
            "dark-grayish-blue": "hsl(227, 10%, 46%)",
            "dark-gray": "hsl(0, 0%, 59%)",
        },
    },
    plugins: [],
};
