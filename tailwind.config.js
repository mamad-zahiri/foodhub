/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                "up-down": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(10px)" },
                },
            },
            animation: {
                "up-down": "up-down 2s ease-in-out infinite",
            },
            dropShadow: {
                dark: "0 35px 25px #000",
            },
        },
    },
    plugins: [],
}
