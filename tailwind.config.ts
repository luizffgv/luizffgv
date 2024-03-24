import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["variant", ["&:is(.dark *):not(.light *)"]],
  theme: {
    extend: {
      colors: {
        bg: "#f1f5f9",
        "bg-dark": "#0f172a",
        "bg-close": "#f8fafc",
        "bg-close-dark": "#1e293b",
        primary: "#3b82f6",
        fg: "#0f172a",
        "fg-dark": "#f1f5f9",
        "fg-on-primary": "#f8fafc",
      },
    },
  },
  plugins: [],
};

export default config;
