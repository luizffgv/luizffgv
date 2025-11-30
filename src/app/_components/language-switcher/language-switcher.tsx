"use client";

import { LanguagesIcon } from "lucide-react";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

import Button from "@components/button";

export default function LanguageSwitcher(): JSX.Element {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <Button
      aria-label={t("language-switcher.switch")}
      onClick={() => {
        void i18n.changeLanguage(i18n.language === "pt-BR" ? "en" : "pt-BR");
      }}
    >
      <LanguagesIcon />
    </Button>
  );
}
