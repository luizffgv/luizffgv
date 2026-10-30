"use client";

import Link from "next/link";
import { JSX } from "react";
import { Trans, useTranslation } from "react-i18next";

import GlowingText from "../_components/glowing-text";
import TitledSection from "../_components/titled-section";

export default function About(): JSX.Element {
  const { t } = useTranslation();

  return (
    <main>
      <div className="flex flex-col items-center gap-[480px] bg-bg px-4 pb-[50vh] pt-64 transition-colors [grid-area:stack] dark:bg-bg-dark">
        <TitledSection title={t("about.title")} level={1}>
          <TitledSection title={t("about.interests")} level={2}>
            <TitledSection title={t("about.philosophy.title")} level={3}>
              <Trans t={t} i18nKey="about.philosophy.content" />
            </TitledSection>
            <TitledSection title={t("about.poetry.title")} level={3}>
              <Trans
                t={t}
                i18nKey="about.poetry.content"
                components={{
                  Link: (
                    <Link href="https://www.poetryfoundation.org/poems/44263/fire-and-ice" />
                  ),
                  Glow: <GlowingText>{null}</GlowingText>,
                }}
              />
            </TitledSection>
            <TitledSection title={t("about.topology.title")} level={3}>
              {t("about.topology.content")}
            </TitledSection>
          </TitledSection>
        </TitledSection>
      </div>
    </main>
  );
}
