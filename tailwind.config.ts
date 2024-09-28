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
        gryffindor: "var(--color-gryffindor)",
        slytherin: "var(--color-slytherin)",
        hufflepuff: "var(--color-hufflepuff)",
        ravenclaw: "var(--color-ravenclaw)",
        bkg: "var(--color-bkg)",
      },
      fontFamily: {
        hp: ["var(--font-hp)", "sans-serif"],
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.3)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.3)" },
          "70%": { transform: "scale(1)" },
        },
      },
      animation: {
        heartbeat: "heartbeat 1s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
