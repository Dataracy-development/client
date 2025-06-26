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
                nsKR: ["var(--noto-sans-kr)"],
            },
            boxShadow: {
                filter: "0 0 1px 0 rgba(23, 26, 31, 0.07), 0 0 2px 0 rgba(23, 26, 31, 0.12)",
                card: "0 2px 5px 0 rgba(23, 26, 31, 0.09), 0 0 2px 0 rgba(23, 26, 31, 0.12)",
            },
            backgroundImage: {},
        },
    },
    plugins: [],
} satisfies Config;
