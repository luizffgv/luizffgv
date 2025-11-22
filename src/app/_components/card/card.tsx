"use client";

import { Transition, motion } from "framer-motion";
import { JSX } from "react";

export interface Props {
  children: React.ReactNode;
  footer?: React.ReactNode | undefined;
  layout?: boolean;
  padding?: string | number;
  transition?: Transition;
}

/** A card that can wrap other components. */
export default function Card({
  children,
  footer,
  layout,
  padding = 24,
  transition,
}: Props): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      layout={layout}
      style={{
        padding,
      }}
      className={`bg-bg-close shadow-lg backdrop-blur-xl transition-colors dark:bg-bg-close-dark dark:shadow-sm`}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex justify-center">{children}</div>
        {footer && <div className="mt-4 flex justify-center">{footer}</div>}
      </div>
    </motion.div>
  );
}
