"use client";

import { JSX } from "react";
import { useTranslation } from "react-i18next";

import Button from "@components/button";

export default function NotFound(): JSX.Element {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-4 text-center">
      <h1 className="font-code text-6xl font-bold text-primary">404</h1>
      <p className="text-xl">{t("not-found.message")}</p>
      <Button href="/">{t("not-found.home")}</Button>
    </main>
  );
}
