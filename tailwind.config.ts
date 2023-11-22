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
        white: "#fff",
        black: "#000",
        primary: {
          100: "#FF8B18",
          200: "#A95400",
        },
        secondary: {
          100: "#D3D3D3",
          200: "#C0C0C0",
          300: "#ACACAC",
        },
      },
    },
  },
  plugins: [],
};
export default config;
