"use client";

import { Transition, motion } from "framer-motion";
import { JSX } from "react";

export interface Props {
  children: React.ReactNode;
  footer?: React.ReactNode | undefined;
  className?: string;
  layout?: boolean;
  padding?: string | number;
  transition?: Transition;
}

/** A card that can wrap other components. */
export default function Card({
  children,
  footer,
  className,
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
      className={`flex flex-col border border-fg/10 bg-bg-close/75 shadow-lg backdrop-blur-xl transition-colors dark:border-fg-dark/10 dark:bg-bg-close-dark/75 dark:shadow-sm ${className ?? ""}`}
    >
      <div className="flex min-h-0 flex-col justify-between">
        <div className="flex min-h-0 justify-center">{children}</div>
        {footer && <div className="mt-4 flex justify-center">{footer}</div>}
      </div>
    </motion.div>
  );
}
