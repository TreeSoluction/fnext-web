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
        MAIN_HIGH_BLUE: "#0c2049",
        HIGH_BLUE: "#253459",
        LOW_BLUE: "#004aad",
        PASTEL: "#f7f7f7",
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
