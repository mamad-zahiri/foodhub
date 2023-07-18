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
                wiggle: {
                    "0%": {
                        transform: "rotate(-3deg)",
                    },
                    "20%": {
                        transform: "rotate(12deg)",
                    },
                    "40%": {
                        transform: "rotate(-8deg)",
                    },
                    "60%": {
                        transform: "rotate(3deg)",
                    },
                    "90%": {
                        transform: "rotate(-1deg)",
                    },
                    "100%": {
                        transform: "rotate(0)",
                    },
                },
            },
            animation: {
                "up-down": "up-down 2s ease-in-out infinite",
                wiggle: "wiggle 1s ease infinite",
            },
            dropShadow: {
                dark: "0 35px 25px #000",
            },
        },
    },
    plugins: [],
}

// x =
