"use client";

import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { JSX } from "react";

const lineCva = cva("", {
  variants: {
    alignment: {
      left: null,
      right: null,
    },
    isShort: {
      true: "h-2 bg-primary",
      false: "h-1 from-hr to-transparent dark:from-hr-dark",
    },
  },
  compoundVariants: [
    {
      alignment: "left",
      isShort: false,
      class: "bg-gradient-to-l",
    },
    {
      alignment: "right",
      isShort: false,
      class: "bg-gradient-to-r",
    },
  ],
});

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
};

export default function Skill({ children, icon, title }: Props): JSX.Element {
  const isLeftAligned = (title.codePointAt(0) || 0) % 2 === 0;

  return (
    <div className="flex max-w-prose flex-col gap-4">
      <div className="flex items-center gap-4 text-primary">
        <motion.div
          className="shrink grow"
          initial={{ maxWidth: isLeftAligned ? 8 : undefined }}
          whileInView={{ maxWidth: isLeftAligned ? 80 : undefined }}
          viewport={{ margin: "-20% 0px -20% 0px" }}
        >
          <div
            className={lineCva({ alignment: "left", isShort: isLeftAligned })}
          />
        </motion.div>
        {icon == null ? null : <div>{icon}</div>}
        <div className="text-2xl font-bold">{title}</div>
        <motion.div
          className="shrink grow"
          initial={{ maxWidth: isLeftAligned ? undefined : 8 }}
          whileInView={{ maxWidth: isLeftAligned ? undefined : 80 }}
          viewport={{ margin: "-20% 0px -20% 0px" }}
        >
          <div
            className={lineCva({ alignment: "right", isShort: !isLeftAligned })}
          />
        </motion.div>
      </div>
      {children}
    </div>
  );
}
