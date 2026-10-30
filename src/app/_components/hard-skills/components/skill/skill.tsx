"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
};

const VIEWPORT = { margin: "-20% 0px -20% 0px" };

export default function Skill({ children, icon, title }: Props): JSX.Element {
  return (
    <div className="flex max-w-prose flex-col gap-4">
      <div className="flex items-center gap-4 text-primary">
        <motion.div
          className="h-2 shrink-0 bg-primary"
          initial={{ width: 12 }}
          whileInView={{ width: 28 }}
          viewport={VIEWPORT}
        />
        {icon == null ? null : <div>{icon}</div>}
        <div className="text-2xl font-bold">{title}</div>
        <motion.div
          className="h-1 shrink grow bg-gradient-to-r from-hr to-transparent dark:from-hr-dark"
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
        />
      </div>
      <div className="flex flex-col gap-4 [&_strong]:font-normal [&_strong]:text-primary">
        {children}
      </div>
    </div>
  );
}
