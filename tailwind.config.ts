import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        HIGH_BLUE: "#050A30",
        PASTEL: "#EBEBD3",
        MEDIUM_GREEN: "#4C5B5C",
        LOW_PURPLE: "#A7ACD9",
        BLACK: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
