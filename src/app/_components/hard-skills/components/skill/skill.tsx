"use client";

import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

const lineCva = cva(
  "h-2 grow shrink rounded-full [filter:drop-shadow(0_0_15px_hsl(var(--color-primary)))]",
  {
    variants: {
      isShort: {
        true: "bg-primary",
        false: "bg-hr dark:bg-hr-dark",
      },
    },
  },
);

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
          className={lineCva({ isShort: isLeftAligned })}
          initial={{ maxWidth: isLeftAligned ? 8 : undefined }}
          whileInView={{ maxWidth: isLeftAligned ? 80 : undefined }}
          viewport={{ margin: "-20% 0px -20% 0px" }}
        />
        {icon == null ? null : <div>{icon}</div>}
        <div className="text-2xl font-bold">{title}</div>
        <motion.div
          className={lineCva({ isShort: !isLeftAligned })}
          initial={{ maxWidth: isLeftAligned ? undefined : 8 }}
          whileInView={{ maxWidth: isLeftAligned ? undefined : 80 }}
          viewport={{ margin: "-20% 0px -20% 0px" }}
        />
      </div>
      {children}
    </div>
  );
}
