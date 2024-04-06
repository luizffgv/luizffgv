"use client";

import { SunMoonIcon } from "lucide-react";
import Button from "./button";

export default function ThemeSwitcher() {
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
