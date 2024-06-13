"use client";

import Button from "@components/button";
import { SunMoonIcon } from "lucide-react";

export default function ThemeSwitcher(): JSX.Element {
  return (
    <Button
      aria-label="Mudar tema"
      onClick={() => {
        localStorage.setItem(
          "theme-dark",
          String(document.documentElement.classList.toggle("dark")),
        );
      }}
    >
      <SunMoonIcon />
      Mudar tema
    </Button>
  );
}
