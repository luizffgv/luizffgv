"use client";

import React, { useMemo } from "react";
import Flicker from "../flicker";
import GlowingText from "@components/glowing-text";
import PixelatedImage from "../pixelated-image";
import TextBody from "@components/text-body";
import TitledSection from "@components/titled-section";
import { getIconPosition } from "./get-icon-position";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
  children: React.ReactNode;
  iconUrl: string;
  title: string;
};

export default function Highlight(props: Props): JSX.Element {
  const md = useMediaQuery("screen and (min-width: 768px)");
  const xl = useMediaQuery("screen and (min-width: 1280px)");

  const { left, rotate, translate } = useMemo(
    () => getIconPosition({ aside: xl ?? false, seed: props.title }),
    [xl, props.title],
  );

  return (
    <TitledSection level={2} title={props.title}>
      <div className="relative">
        <motion.div
          className="absolute -top-8 h-24 w-24 -translate-x-1/2 md:h-48 md:w-48 "
          initial={{
            left: "50%",
            opacity: 0,
            scale: 0.75,
          }}
          whileInView={{
            left,
            opacity: xl ? 1 : 0.15,
            scale: 1,
            rotate,
            transition: { duration: 0.25 },
            translate,
          }}
        >
          <Flicker when={xl}>
            <GlowingText>
              <div className="*:h-24 *:w-24 *:md:h-48 *:md:w-48">
                <PixelatedImage
                  colorOverride={[59, 130, 246, 255]}
                  paddingPercentage={0.25}
                  resolution={md ? 0.1 : 0.15}
                  width={192}
                  src={props.iconUrl}
                />
              </div>
            </GlowingText>
          </Flicker>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: "-2em" }}
          whileInView={{
            opacity: 1,
            translateY: "0",
            transition: { delay: 0.25 },
          }}
        >
          <TextBody>{props.children}</TextBody>
        </motion.div>
      </div>
    </TitledSection>
  );
}
