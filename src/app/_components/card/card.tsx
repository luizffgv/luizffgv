"use client";

import { motion } from "framer-motion";

export interface Props {
  children: React.ReactNode;
  footer?: React.ReactNode | undefined;
  layout?: boolean;
}

/** A card that can wrap other components. */
export default function Card({ children, footer, layout }: Props): JSX.Element {
  return (
    <motion.div
      initial={{ scale: 0.75 }}
      whileInView={{ scale: 1 }}
      layout={layout}
      style={{ borderRadius: 8 }}
      className={`rounded-lg bg-bg-close/75 shadow-lg backdrop-blur-xl transition-colors dark:bg-bg-close-dark/75 dark:shadow-sm`}
    >
      <div className="flex h-full w-full flex-col justify-between p-6">
        <div className="flex justify-center">{children}</div>
        {footer && <div className="mt-4 flex justify-center">{footer}</div>}
      </div>
    </motion.div>
  );
}
