"use client";

import React, { useMemo } from "react";
import GlowingText from "@components/glowing-text";
import TextBody from "@components/text-body";
import TitledSection from "@components/titled-section";
import { motion } from "framer-motion";
import stringHash from "string-hash";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
};

export default function Highlight(props: Props): JSX.Element {
  const md = useMediaQuery("screen and (min-width: 768px)");

  const { left, rotate } = useMemo(() => {
    const left = (stringHash(props.title) % 5) * 20;
    const rotate = -20 + (left / 100) * 40;

    return {
      left: md ? `${left}%` : `50%`,
      rotate: `${rotate}deg`,
    };
  }, [md, props.title]);

  return (
    <TitledSection level={2} title={props.title}>
      <div className="relative">
        <div
          style={{ left }}
          className="absolute -top-8 h-24 w-24 -translate-x-1/2 opacity-15 md:h-48 md:w-48"
        >
          <motion.div
            initial={{ scale: 0.75 }}
            whileInView={{
              scale: 1,
              rotate,
              transition: { duration: 0.25 },
            }}
          >
            <GlowingText>
              <div className="*:h-24 *:w-24 *:md:h-48 *:md:w-48">
                {props.icon}
              </div>
            </GlowingText>
          </motion.div>
        </div>
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
