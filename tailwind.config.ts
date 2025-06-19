import type { Config } from "tailwindcss";

export default {
    content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontSize: {},
            colors: {},
            fontFamily: {
                montserrat: ["var(--font-montserrat)"],
                inter: ["var(--inter)"],
            },
            boxShadow: {},
            backgroundImage: {},
        },
    },
    plugins: [],
} satisfies Config;
