import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["variant", ["&:is(.dark *):not(.light *)"]],
  theme: {
    extend: {
      colors: {
        bg: "#e3f0fa",
        "bg-dark": "#1e293b",
        "bg-close": "#f1f6ff",
        "bg-close-dark": "#1c242f",
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
