import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["variant", ["&:is(.dark *):not(.light *)"]],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--color-primary), <alpha-value>)",
        danger: "rgba(var(--color-danger), <alpha-value>)",
        bg: "#e3f0fa",
        "bg-dark": "#1e293b",
        "bg-close": "#f1f6ff",
        "bg-close-dark": "#1c242f",
        "bg-closer": "#ffffff",
        "bg-closer-dark": "#2c343f",
        fg: "#1f273a",
        "fg-dark": "#f1f5f9",
        "fg-on-primary": "#f8fafc",
      },
    },
  },
  plugins: [],
};

export default config;
