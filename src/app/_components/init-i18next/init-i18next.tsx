"use client";

import i18n from "i18next";
import { JSX, PropsWithChildren } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";

import en from "@/public/i18n/en/common.json";
import ptBr from "@/public/i18n/pt-BR/common.json";

void i18n.use(initReactI18next).init({
  defaultNS: "common",
  ns: ["common"],
  fallbackLng: "pt-BR",
  lng: "pt-BR",
  resources: {
    en: {
      common: en,
    },
    "pt-BR": {
      common: ptBr,
    },
  },
  supportedLngs: ["pt-BR", "en"],
});

export default function WithI18n({ children }: PropsWithChildren): JSX.Element {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
