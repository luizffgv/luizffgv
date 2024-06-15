import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["variant", ["&:is(.dark *):not(.light *)"]],
  theme: {
    extend: {
      colors: {
        bg: "#e2e8f0",
        "bg-dark": "#0f172a",
        "bg-close": "#f8fafc",
        "bg-close-dark": "#1e293b",
        "bg-closer": "#ffffff",
        "bg-closer-dark": "#1c2027",
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
