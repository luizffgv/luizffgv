"use client";

import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { useMemo } from "react";

import Flicker from "@/app/_components/flicker";

const lineCva = cva("h-2 rounded-full", {
  variants: {
    isShort: {
      true: "bg-primary",
      false: "bg-hr dark:bg-hr-dark",
    },
  },
});

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
};

export default function Skill({ children, icon, title }: Props): JSX.Element {
  const isLeftAligned = (title.codePointAt(0) || 0) % 2 === 0;
  const shouldFlicker = useMemo(() => Math.random() < 1 / 3, []);

  return (
    <div className="flex max-w-prose flex-col gap-4">
      <div className="flex items-center gap-4 text-primary">
        <motion.div
          className="shrink grow"
          initial={{ maxWidth: isLeftAligned ? 8 : undefined }}
          whileInView={{ maxWidth: isLeftAligned ? 80 : undefined }}
          viewport={{ margin: "-20% 0px -20% 0px" }}
        >
          <Flicker when={shouldFlicker && isLeftAligned}>
            <div className={lineCva({ isShort: isLeftAligned })} />
          </Flicker>
        </motion.div>
        {icon == null ? null : <div>{icon}</div>}
        <div className="text-2xl font-bold">{title}</div>
        <motion.div
          className="shrink grow"
          initial={{ maxWidth: isLeftAligned ? undefined : 8 }}
          whileInView={{ maxWidth: isLeftAligned ? undefined : 80 }}
          viewport={{ margin: "-20% 0px -20% 0px" }}
        >
          <Flicker when={shouldFlicker && !isLeftAligned}>
            <div className={lineCva({ isShort: !isLeftAligned })} />
          </Flicker>
        </motion.div>
      </div>
      {children}
    </div>
  );
}
