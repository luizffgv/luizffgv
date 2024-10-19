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
        "bg-dark": "#00000e",
        "bg-close": "#f1f6ff",
        "bg-close-dark": "#050510",
        "bg-closer": "#ffffff",
        "bg-closer-dark": "#0a1020",
        fg: "#1f273a",
        "fg-dark": "#e1e5ff",
        "fg-on-primary": "#f8fafc",
      },
    },
  },
  plugins: [],
};

export default config;
