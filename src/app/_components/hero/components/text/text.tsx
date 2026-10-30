import clsx from "clsx";
import { MotionConfig, Variants, motion } from "framer-motion";
import { ArrowRightIcon, AtSignIcon, LinkedinIcon } from "lucide-react";
import { Archivo_Black } from "next/font/google";
import { JSX } from "react";
import { Trans, useTranslation } from "react-i18next";

import Button from "@components/button";

import GlassText from "../glass-text";
import ScrambleText from "../scramble-text";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400" });

const STAGGER: Variants = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const RISE: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Text(): JSX.Element {
  const { t } = useTranslation();

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        animate="visible"
        className="contents"
        initial="hidden"
        variants={STAGGER}
      >
        <h1
          aria-label={`${t("hero.greeting")} ${t("hero.name")}`}
          className="flex flex-col items-start"
        >
          <motion.span
            className="text-xl text-primary sm:text-2xl dark:text-fg-dark"
            variants={RISE}
          >
            {`// ${t("hero.greeting")}`}
          </motion.span>
          {/* The margin cancels the space at the left of the L */}
          <span
            className={clsx(
              archivoBlack.className,
              "-ml-[0.072em] text-[length:clamp(5rem,min(17vw,30vh),13rem)] uppercase leading-[0.95] tracking-tighter",
            )}
          >
            <GlassText text={t("hero.name")} />
          </span>
        </h1>
        <motion.div variants={RISE}>
          <Trans
            aria-label={t("hero.subtitle-label")}
            className="text-balance text-xl sm:text-2xl"
            components={{
              Tool: (
                <ScrambleText
                  className="backdrop-glass w-fit border border-fg/15 bg-primary/15 px-2 lg:justify-self-start dark:border-fg-on-primary/20 dark:bg-primary/50"
                  texts={[
                    t("tools.node-js"),
                    t("tools.typescript"),
                    t("tools.react"),
                  ]}
                />
              ),
            }}
            i18nKey={"hero.subtitle"}
            parent="p"
            t={t}
          >
            <span aria-hidden>Eu sou um desenvolvedor focado em</span>
          </Trans>
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center gap-3 pt-2"
          variants={RISE}
        >
          <Button href="/projetos" variant="solid">
            {t("sections.projects")}
            <ArrowRightIcon />
          </Button>
          <Button
            href="https://www.linkedin.com/in/luizffgv/"
            target="_blank"
            variant="outline"
          >
            {/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
            <LinkedinIcon />
            LinkedIn
          </Button>
          <Button href="mailto:hireme@luizf.dev" variant="outline">
            <AtSignIcon />
            hireme@luizf.dev
          </Button>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
