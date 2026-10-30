"use client";

import { HeartIcon, MessageCircleIcon } from "lucide-react";
import { JSX } from "react";
import { Trans, useTranslation } from "react-i18next";

import Button from "@components/button";
import ContactButtons from "@components/contact-buttons";
import GlowingText from "@components/glowing-text";

export default function Career(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-4">
        <p>{t("career.come-closer")}</p>
        <p className="text-center text-2xl" aria-label={t("career.wish-label")}>
          <Trans
            t={t}
            i18nKey="career.wish"
            components={{
              Heart: (
                <HeartIcon
                  className="inline animate-pulse [fill:currentcolor]"
                  width={16}
                  height={16}
                />
              ),
              Glow: <GlowingText>{null}</GlowingText>,
            }}
          />
        </p>
        <p className="text-end">{t("career.dont-wait")}</p>
      </div>
      <Button
        modalContent={
          <div className="flex flex-col gap-4">
            <span className="text-center">{t("career.contact")}</span>
            <ContactButtons></ContactButtons>
          </div>
        }
      >
        <MessageCircleIcon />
        {t("career.talk")}
      </Button>
    </div>
  );
}
