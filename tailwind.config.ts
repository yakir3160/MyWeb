import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors :{
        background: "#041e0e",
        gucci: "#188A50",
        card: "#0a3820",
        action: "#4caf50",
        text: "#fcfaf2",
        yellow: "#ffe450",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
      },
      keyframes : {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: '0',
          }
        },
      },
    },
  },
  plugins: [],
};
export default config;
