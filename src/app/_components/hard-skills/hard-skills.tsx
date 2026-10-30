"use client";

import { useHeadroom } from "@mantine/hooks";
import {
  Atom,
  Blocks,
  Braces,
  Gauge,
  GitBranch,
  type LucideIcon,
  Package,
  Puzzle,
  Sparkles,
} from "lucide-react";
import { JSX } from "react";
import { Trans, useTranslation } from "react-i18next";

import ColorCycler from "../color-cycler";
import GlowingText from "../glowing-text";
import TitledSection from "../titled-section";
import Skill from "./components/skill/skill";

const SKILL_KEYS = [
  "ai-assisted-development",
  "frontend-architecture",
  "build-performance",
  "typescript",
  "react",
  "single-spa",
  "npm-publishing",
  "git",
] as const;

const SKILL_ICONS: Record<(typeof SKILL_KEYS)[number], LucideIcon> = {
  "ai-assisted-development": Sparkles,
  "frontend-architecture": Blocks,
  "build-performance": Gauge,
  typescript: Braces,
  react: Atom,
  "single-spa": Puzzle,
  "npm-publishing": Package,
  git: GitBranch,
};

export default function HardSkills(): JSX.Element {
  const { t } = useTranslation();
  const { pinned } = useHeadroom();

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
        <div className="flex flex-col gap-6">
          <nav
            className={`sticky z-[1] flex max-w-prose flex-wrap gap-2 bg-bg-close/75 py-2 backdrop-blur-lg transition-[top] dark:bg-bg-close-dark/75 ${pinned ? "top-16" : "top-0"}`}
          >
            {SKILL_KEYS.map((key) => {
              const Icon = SKILL_ICONS[key];
              return (
                <a
                  key={key}
                  href={`#skill-${key}`}
                  className="flex grow items-center justify-center gap-1.5 border border-primary px-3 py-1 text-sm text-primary transition-colors hover:bg-primary hover:text-fg-on-primary"
                >
                  <Icon aria-hidden size={14} />
                  {t(`hard-skills.${key}.shortcut`)}
                </a>
              );
            })}
          </nav>
          {SKILL_KEYS.map((key) => {
            const Icon = SKILL_ICONS[key];
            return (
              <Skill
                key={key}
                icon={<Icon aria-hidden size={28} />}
                id={`skill-${key}`}
                title={t(`hard-skills.${key}.title`)}
              >
                <Trans
                  i18nKey={`hard-skills.${key}.description`}
                  t={t}
                  components={{ ul: <ul />, li: <li /> }}
                />
              </Skill>
            );
          })}
        </div>
      </TitledSection>
    </ColorCycler>
  );
}
