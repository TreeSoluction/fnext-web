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
        HIGH_BLUE: "#050A30",
        LOW_BLUE: "#004aad",
        PASTEL: "#EBEBD3",
        MEDIUM_GREEN: "#4C5B5C",
        LOW_PURPLE: "#A7ACD9",
        BLACK: "#000000",
        GRAY: "#a7a7a6"
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
