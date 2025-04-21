/* eslint-disable sonarjs/no-duplicate-string */
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["variant", ["&:is(.dark *):not(.light *)"]],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary), <alpha-value>)",
        danger: "rgba(var(--color-danger), <alpha-value>)",
        bg: "#fafafa",
        "bg-dark": "#0c0d14",
        "bg-close": "#ffffff",
        "bg-close-dark": "#131825",
        "bg-button": "hsl(var(--color-primary), calc(<alpha-value> * 0.15))",
        "bg-checkbox-unchecked":
          "hsl(var(--color-primary), calc(<alpha-value> * 0.15))",
        fg: "#1f273a",
        "fg-weak": "#949494",
        "fg-dark": "#e1e5ff",
        "fg-on-primary": "#f8fafc",
        "timeline-line":
          "hsl(var(--color-primary), calc(<alpha-value> * 0.15))",
        "timeline-line-dark":
          "hsl(var(--color-primary), calc(<alpha-value> * 0.15))",
      },
    },
  },
  plugins: [],
};

export default config;
