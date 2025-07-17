import type { Config } from "tailwindcss";

export default {
    content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontSize: {
                logo1: [
                    "48px",
                    {
                        fontWeight: "700",
                        lineHeight: "59px",
                    },
                ],
                logo2: [
                    "36px",
                    {
                        fontWeight: "700",
                        lineHeight: "44px",
                    },
                ],
                logo3: [
                    "30px",
                    {
                        fontWeight: "700",
                        lineHeight: "37px",
                    },
                ],
                h1: [
                    "64px",
                    {
                        fontWeight: "700",
                        lineHeight: "77px",
                    },
                ],
                h2: [
                    "48px",
                    {
                        fontWeight: "700",
                        lineHeight: "58px",
                    },
                ],
                h3: [
                    "40px",
                    {
                        fontWeight: "700",
                        lineHeight: "48px",
                    },
                ],
                h4: [
                    "32px",
                    {
                        fontWeight: "700",
                        lineHeight: "38px",
                    },
                ],
                h5: [
                    "24px",
                    {
                        fontWeight: "700",
                        lineHeight: "29px",
                    },
                ],
                h6: [
                    "20px",
                    {
                        fontWeight: "700",
                        lineHeight: "24px",
                    },
                ],
                sub1: [
                    "20px",
                    {
                        fontWeight: "400",
                        lineHeight: "24px",
                    },
                ],
                sub2: [
                    "18px",
                    {
                        fontWeight: "400",
                        lineHeight: "22px",
                    },
                ],
                body1: [
                    "16px",
                    {
                        fontWeight: "400",
                        lineHeight: "19px",
                    },
                ],
                body2: [
                    "14px",
                    {
                        fontWeight: "400",
                        lineHeight: "17px",
                    },
                ],
                button: [
                    "14px",
                    {
                        fontWeight: "700",
                        lineHeight: "17px",
                    },
                ],
                caption: [
                    "12px",
                    {
                        fontWeight: "400",
                        lineHeight: "14px",
                    },
                ],
            },
            colors: {
                primary: "#3423A6",
                secondary: "#E85D75",
                color3: "#FFC857",
                color4: "#34D1BF",
                error: "#DE3B40",
                warning: "#EFB034",
                success: "#1DD75B",
                info: "#379AE6",
                n900: "#171A1F",
                n800: "#1E2128",
                n700: "#323743",
                n600: "#565D6D",
                n500: "#9095A1",
                n400: "#BDC1CA",
                n300: "#DEE1E6",
                n200: "#F3F4F6",
                n100: "#FAFAFB",
                n0: "#FFFFFF",
            },
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
