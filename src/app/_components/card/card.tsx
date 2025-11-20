"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

export interface Props {
  children: React.ReactNode;
  footer?: React.ReactNode | undefined;
  layout?: boolean;
  padding?: string | number;
}

/** A card that can wrap other components. */
export default function Card({
  children,
  footer,
  layout,
  padding = 24,
}: Props): JSX.Element {
  return (
    <motion.div
      initial={{ scale: 0.75 }}
      whileInView={{ scale: 1 }}
      layout={layout}
      style={{
        borderRadius: 8,
        padding,
      }}
      className={`rounded-lg bg-bg-close shadow-lg backdrop-blur-xl transition-colors dark:bg-bg-close-dark dark:shadow-sm`}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex justify-center">{children}</div>
        {footer && <div className="mt-4 flex justify-center">{footer}</div>}
      </div>
    </motion.div>
  );
}
