"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const PAGE_KEYS = {
  "/": "home",
  "/projetos": "projects",
  "/sobre": "about",
} as const;

/** Keeps `<html lang>`, the title and the description in sync with the language. */
export default function DocumentLanguage(): null {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const language = i18n.language;

  useEffect(() => {
    document.documentElement.lang = language;

    if (!(pathname in PAGE_KEYS)) return;
    const page = PAGE_KEYS[pathname as keyof typeof PAGE_KEYS];

    document.title = t(`meta.${page}.title`);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t(`meta.${page}.description`));
  }, [language, pathname, t]);

  return null;
}
