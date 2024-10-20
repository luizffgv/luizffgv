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
      className={`rounded-lg rounded-br-none rounded-tl-none border-2 border-primary/15 bg-bg-closer shadow-sm transition-colors dark:border-transparent dark:bg-bg-closer-dark`}
    >
      <div className="flex h-full w-full flex-col justify-between rounded-lg p-4">
        <div className="flex justify-center">{children}</div>
        {footer && <div className="mt-4 flex justify-center">{footer}</div>}
      </div>
    </motion.div>
  );
}
