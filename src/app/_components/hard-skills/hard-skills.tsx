"use client";

import { JSX } from "react";
import { Trans, useTranslation } from "react-i18next";

import ColorCycler from "../color-cycler";
import GlowingText from "../glowing-text";
import TitledSection from "../titled-section";
import Skill from "./components/skill/skill";

const SKILL_KEYS = [
  "typescript",
  "react",
  "single-spa",
  "npm-publishing",
  "git",
] as const;

export default function HardSkills(): JSX.Element {
  const { t } = useTranslation();

  return (
    <ColorCycler>
      <TitledSection
        level={2}
        title={
          <Trans t={t} i18nKey="hard-skills.title">
            Minhas <GlowingText>hard skills</GlowingText>
          </Trans>
        }
      >
        <div className="flex flex-col gap-16">
          {SKILL_KEYS.map((key) => (
            <Skill key={key} title={t(`hard-skills.${key}.title`)}>
              <Trans i18nKey={`hard-skills.${key}.description`} t={t} />
            </Skill>
          ))}
        </div>
      </TitledSection>
    </ColorCycler>
  );
}
