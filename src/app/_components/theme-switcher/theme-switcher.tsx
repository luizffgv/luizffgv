"use client";

import { SunMoonIcon } from "lucide-react";
import { JSX } from "react";

import Button from "@components/button";

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
      <span className="hidden sm:inline">Mudar tema</span>
    </Button>
  );
}
