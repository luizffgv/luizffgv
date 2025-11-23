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
        "bg-dark": "#0a0a0a",
        "bg-close": "#ffffff",
        "bg-close-dark": "#0e0e0e",
        "bg-button": "transparent",
        "bg-segmented-control": "theme(colors.bg-close)",
        "bg-segmented-control-dark": "theme(colors.bg-close-dark)",
        "border-segmented-control":
          "hsl(var(--color-primary), calc(<alpha-value> * 0.15))",
        "border-button":
          "hsl(var(--color-primary), calc(<alpha-value> * 0.15))",
        "bg-checkbox-unchecked":
          "hsl(var(--color-primary), calc(<alpha-value> * 0.15))",
        fg: "#1f273a",
        "fg-weak": "#949494",
        "fg-dark": "#ddd",
        "fg-on-primary": "white",
        "timeline-line":
          "hsl(var(--color-primary), calc(<alpha-value> * 0.15))",
        "timeline-line-dark":
          "hsl(var(--color-primary), calc(<alpha-value> * 0.15))",
        hr: "hsl(var(--color-primary), calc(<alpha-value> * 0.15))",
        "hr-dark": "hsl(var(--color-primary), calc(<alpha-value> * 0.15))",
      },
    },
  },
  plugins: [],
};

export default config;
