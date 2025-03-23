import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["variant", ["&:is(.dark *):not(.light *)"]],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--color-primary), <alpha-value>)",
        danger: "rgba(var(--color-danger), <alpha-value>)",
        bg: "#fafafa",
        "bg-dark": "#0c0d14",
        "bg-close": "#ffffff",
        "bg-close-dark": "#131825",
        "bg-button": "#e6eef8",
        "bg-checkbox-unchecked": "#e6eef8",
        fg: "#1f273a",
        "fg-weak": "#949494",
        "fg-dark": "#e1e5ff",
        "fg-on-primary": "#f8fafc",
        "timeline-line": "#d2ddff",
        "timeline-line-dark": "#121925",
      },
    },
  },
  plugins: [],
};

export default config;
