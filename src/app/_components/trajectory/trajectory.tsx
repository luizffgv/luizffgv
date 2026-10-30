"use client";

import {
  AtomIcon,
  BlocksIcon,
  BotIcon,
  LanguagesIcon,
  PackageIcon,
  PencilIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from "lucide-react";
import { JSX } from "react";
import { Trans, useTranslation } from "react-i18next";

import ColorCycler from "../color-cycler";
import GlowingText from "../glowing-text";
import Timeline from "../timeline";
import TitledSection from "../titled-section";
import Stat from "./stat";
import Tag from "./tag";

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
                  <span className="text-gray-400 transition-colors dark:text-gray-600">
                    {"${"}
                  </span>
                  {t("trajectory.your-team")}
                  <span className="text-gray-400 transition-colors dark:text-gray-600">
                    {"}"}
                  </span>
                </>
              }
              title={
                <>
                  <span className="text-gray-400 transition-colors dark:text-gray-600">
                    {"${"}
                  </span>
                  {t("trajectory.my-role")}
                  <span className="text-gray-400 transition-colors dark:text-gray-600">
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
              <div className="mb-4 mt-2 flex flex-col gap-2">
                <Stat
                  detail={t("trajectory.stats.builds-detail")}
                  label={t("trajectory.stats.builds")}
                  value={t("trajectory.stats.builds-value")}
                />
                <Stat
                  detail={t("trajectory.stats.js-load-detail")}
                  label={t("trajectory.stats.js-load")}
                  value={t("trajectory.stats.js-load-value")}
                />
              </div>
              <p>{t("trajectory.details.frontend-monorepo")}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Tag icon={<ShieldCheckIcon className="size-4" />}>
                  {t("trajectory.tags.architecture")}
                </Tag>
                <Tag icon={<BotIcon className="size-4" />}>
                  {t("trajectory.tags.agents")}
                </Tag>
                <Tag icon={<AtomIcon className="size-4" />}>
                  {t("trajectory.tags.react")}
                </Tag>
              </div>
              <br />
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
              <div className="mb-4 mt-2">
                <Stat
                  detail={t("trajectory.stats.components-detail")}
                  label={t("trajectory.stats.components")}
                  value={t("trajectory.stats.components-value")}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Tag icon={<PackageIcon className="size-4" />}>
                  {t("trajectory.tags.component-library")}
                </Tag>
                <Tag icon={<BlocksIcon className="size-4" />}>
                  {t("trajectory.tags.microfrontends")}
                </Tag>
                <Tag icon={<LanguagesIcon className="size-4" />}>
                  {t("trajectory.tags.i18n")}
                </Tag>
                <Tag icon={<WrenchIcon className="size-4" />}>
                  {t("trajectory.tags.maintenance")}
                </Tag>
              </div>
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
