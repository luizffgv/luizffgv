import { LayoutGroup, motion } from "framer-motion";
import { JSX, createElement } from "react";
import { Trans, useTranslation } from "react-i18next";

import ColorCycler from "@/app/_components/color-cycler";
import LayeredText from "@/app/_components/layered-text";
import RotatingText from "@/app/_components/rotating-text";

export default function Text(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="gap-5 text-center text-3xl font-bold text-fg-on-primary sm:text-5xl">
        <ColorCycler>
          <LayeredText depth="16px" layers={16} perspective="800px">
            {t("hero.title")}
          </LayeredText>
        </ColorCycler>
      </h1>
      <LayoutGroup>
        <Trans
          aria-label={t("hero.subtitle-label")}
          className="text-center text-xl font-medium"
          components={{
            RotatingText: createElement(() => (
              <motion.span aria-hidden className="inline-block" layout>
                <RotatingText
                  texts={[
                    t("tools.node-js"),
                    t("tools.typescript"),
                    t("tools.react"),
                  ]}
                />
              </motion.span>
            )),
          }}
          i18nKey={"hero.subtitle"}
          parent="p"
          t={t}
        >
          <span aria-hidden>Eu sou um desenvolvedor focado em</span>
        </Trans>
      </LayoutGroup>
    </>
  );
}
