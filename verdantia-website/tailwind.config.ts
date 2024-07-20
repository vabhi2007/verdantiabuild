import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primitives-green-800": "var(--primitives-green-800)",
        "primitives-white-900": "var(--primitives-white-900)",
        "custom-green": "var(--custom-green)",
        "button-green": "var(--button-green)",
      }
    },
  },
  plugins: [],
};
export default config;
