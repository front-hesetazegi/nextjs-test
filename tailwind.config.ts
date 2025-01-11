import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      green: "#B9FF66",
      grey: "#F3F3F3",
      dark: "#191A23",
      black: "#000000",
      white: "#ffffff",
    },
  },
  plugins: [],
} satisfies Config;
