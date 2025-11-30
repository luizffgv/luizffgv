"use client";

import { PencilIcon } from "lucide-react";
import { JSX } from "react";
import { Trans, useTranslation } from "react-i18next";

import ColorCycler from "../color-cycler";
import GlowingText from "../glowing-text";
import Timeline from "../timeline";
import TitledSection from "../titled-section";

export default function Trajectory(): JSX.Element {
  const { t } = useTranslation();

  return (
    <ColorCycler offset={270}>
      <TitledSection
        level={2}
        title={
          <Trans t={t} i18nKey="trajectory.title">
            Minha <GlowingText>trajetória</GlowingText>
          </Trans>
        }
      >
        <div className="max-w-[90vw]">
          <Timeline.Root>
            <Timeline.Entry
              auxiliaryText={t("trajectory.you-decide")}
              customDot={
                <div className="relative h-6 w-6">
                  <div className="absolute inset-0 rotate-45 border-4 border-primary" />
                  <div className="absolute inset-2 rotate-45 bg-primary" />
                </div>
              }
              subtitle={
                <>
                  <span className="text-gray-400 transition-colors dark:text-gray-800">
                    {"${"}
                  </span>
                  {t("trajectory.your-team")}
                  <span className="text-gray-400 transition-colors dark:text-gray-800">
                    {"}"}
                  </span>
                </>
              }
              title={
                <>
                  <span className="text-gray-400 transition-colors dark:text-gray-800">
                    {"${"}
                  </span>
                  {t("trajectory.my-role")}
                  <span className="text-gray-400 transition-colors dark:text-gray-800">
                    {"}"}
                  </span>
                </>
              }
            ></Timeline.Entry>
            <Timeline.Entry
              auxiliaryText={t("trajectory.dates.2025-05")}
              customDot={
                <div className="h-6 w-6 rotate-45 border-4 border-primary" />
              }
              subtitle={t("companies.zenvia")}
              title={t("roles.junior-developer")}
            >
              <div className="text-primary">
                <PencilIcon
                  className="mr-2 inline h-4 w-4"
                  fill="currentColor"
                />{" "}
                <span className="font-bold">{t("trajectory.writing")}</span>
              </div>
            </Timeline.Entry>
            <Timeline.Entry
              auxiliaryText={t("trajectory.dates.2024-05")}
              customDot={
                <div className="h-6 w-6 rotate-45 rounded-md border-4 border-primary" />
              }
              subtitle={t("companies.zenvia")}
              title={t("roles.development-assistant")}
            >
              <p>{t("trajectory.details.react-component-library")}</p>
              <br />
              <p>{t("trajectory.details.mfe-i18n")}</p>
              <br />
              <p>{t("trajectory.details.assistant-maintenance")}</p>
            </Timeline.Entry>
            <Timeline.Entry
              auxiliaryText={t("trajectory.dates.2020")}
              customDot={
                <div className="h-6 w-6 rotate-45 rounded-full border-4 border-primary" />
              }
              title={t("trajectory.first-hello-world")}
            ></Timeline.Entry>
          </Timeline.Root>
        </div>
      </TitledSection>
    </ColorCycler>
  );
}
