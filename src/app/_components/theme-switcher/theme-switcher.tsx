"use client";

import { SunMoonIcon } from "lucide-react";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

import Button from "@components/button";

export default function ThemeSwitcher(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Button
      aria-label={t("theme-switcher.switch")}
      onClick={() => {
        localStorage.setItem(
          "theme-dark",
          String(document.documentElement.classList.toggle("dark")),
        );
      }}
    >
      <SunMoonIcon />
      <span className="hidden sm:inline">{t("theme-switcher.switch")}</span>
    </Button>
  );
}
