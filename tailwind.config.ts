import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: "#3B0404",
          900: "#590808",
          800: "#780E0E",
          700: "#941616",
          600: "#B32020",
          500: "#C62828",
          400: "#D9725F",
          300: "#E8B49E",
          200: "#F2D4C2",
          100: "#FCEDE6",
          50: "#FAEFE6",
        },
        secondary: {
          950: "#470804",
          900: "#6E100B",
          800: "#941A13",
          700: "#B8281D",
          600: "#DB382C",
          500: "#F44336",
          400: "#F78B6F",
          300: "#FAC8AC",
          200: "#FCE0CC",
          100: "#FFF4EB",
          50: "#FFFAF5",
        },
        neutral: {
          950: "#210A0A",
          900: "#361818",
          800: "#472B2B",
          700: "#574141",
          600: "#695E5E",
          500: "#757575",
          400: "#9E9E9E",
          300: "#C7C7C7",
          200: "#DEDEDE",
          100: "#F2F2F2",
          50: "#F7F7F7",
        },
        text: {
          950: "#0A0303",
          900: "#0F0707",
          800: "#140C0C",
          700: "#1A1313",
          600: "#1F1C1C",
          500: "#212121",
          400: "#636363",
          300: "#A6A6A6",
          200: "#C7C7C7",
          100: "#E8E8E8",
          50: "#F5F5F5",
        },
        background: {
          950: "#471515",
          900: "#703232",
          800: "#965A5A",
          700: "#BA8C8C",
          600: "#E0CACA",
          500: "#FAFAFA",
          400: "#FCFCFC",
          300: "#FCFCFC",
          200: "#FFFFFF",
          100: "#FFFFFF",
          50: "#FFFFFF",
        },
        success: {
          800: "#18611B",
          500: "#43A047",
          200: "#C8E8D5",
        },
        warning: {
          800: "#994D00",
          500: "#FFA000",
          200: "#FFF0BF",
        },
        error: {
          800: "#8A1513",
          500: "#E53935",
          200: "#FADDCA",
        },
        info: {
          800: "#0B428A",
          500: "#1E88E5",
          200: "#C3E9FA",
        },
      },
      fontSize:{
        h1: "44px",
        h2: "36px",
        h3: "28px",
        h4: "24px",
        h5: "20px",
        h6: "16px",
        body: "14px",
        button: "12px",
        subtitle: "10px",
      },
      fontWeight: {
        bold: "700",
        medium: "500",
        regular: "400",
        light: "300",
        thin: "100",        
      },
    },
  },
  plugins: [],
};

export default config;
