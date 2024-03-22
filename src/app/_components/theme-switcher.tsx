"use client";

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
      <span className="material-symbols-outlined" aria-hidden translate="no">
        contrast
      </span>
      Mudar tema
    </Button>
  );
}
