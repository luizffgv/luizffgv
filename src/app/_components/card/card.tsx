"use client";

import { Transition, addScaleCorrector, motion } from "framer-motion";
import { JSX } from "react";

const BORDER_WIDTH = 2;
const SHADOW_OFFSET = 6;
const COLOR = "hsl(var(--color-primary))";
const SHADOW_COLOR = "hsl(var(--color-primary), 0.35)";

/**
 * Border and offset shadow drawn as box shadows, which unlike real borders can
 * be thinner than a pixel. That lets them be undone when a layout animation
 * stretches the card.
 */
function shadows(scaleX = 1, scaleY = 1): string {
  const x = BORDER_WIDTH / scaleX;
  const y = BORDER_WIDTH / scaleY;
  return [
    `inset ${x}px 0 0 0 ${COLOR}`,
    `inset -${x}px 0 0 0 ${COLOR}`,
    `inset 0 ${y}px 0 0 ${COLOR}`,
    `inset 0 -${y}px 0 0 ${COLOR}`,
    `${SHADOW_OFFSET / scaleX}px ${SHADOW_OFFSET / scaleY}px 0 0 ${SHADOW_COLOR}`,
  ].join(", ");
}

// Framer's own correction doesn't support multiple shadows
addScaleCorrector({
  boxShadow: {
    correct: (_, { projectionDelta, treeScale }) =>
      shadows(
        (projectionDelta?.x.scale ?? 1) * (treeScale?.x ?? 1),
        (projectionDelta?.y.scale ?? 1) * (treeScale?.y ?? 1),
      ),
  },
});

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
        // Set here so Framer can undo the distortion of layout animations
        boxShadow: shadows(),
      }}
      className={`flex flex-col bg-bg-close/75 backdrop-blur-xl transition-colors dark:bg-bg-close-dark/75 ${className ?? ""}`}
    >
      <div className="flex min-h-0 flex-col justify-between">
        <div className="flex min-h-0 justify-center">{children}</div>
        {footer && <div className="mt-4 flex justify-center">{footer}</div>}
      </div>
    </motion.div>
  );
}
