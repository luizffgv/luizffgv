"use client";
import { motion } from "framer-motion";

export interface Props {
  children: React.ReactNode;
  footer?: React.ReactNode | undefined;
}

/** A card that can wrap other components. */
export default function Card({ children, footer }: Props): JSX.Element {
  return (
    <motion.div
      initial={{ scale: 0.75 }}
      whileInView={{ scale: 1 }}
      className={`bg-bg-closer dark:bg-bg-closer-dark rounded-lg shadow-sm transition-colors`}
    >
      <div className="flex h-full w-full flex-col justify-between rounded-lg p-4">
        <div className="flex justify-center">{children}</div>
        {footer && <div className="mt-4 flex justify-center">{footer}</div>}
      </div>
    </motion.div>
  );
}
