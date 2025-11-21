import { LayoutGroup, motion } from "framer-motion";
import { JSX } from "react";

import { ReactBitsRotatingText } from "../react-bits-rotating-text";

interface RotatingTextProps {
  texts: string[];
}

export default function RotatingText({
  texts,
}: RotatingTextProps): JSX.Element {
  return (
    <span className="relative inline-block overflow-hidden px-2 align-middle">
      <LayoutGroup>
        <motion.span layout>
          <ReactBitsRotatingText
            className="absolute inset-0 w-fit rounded-md bg-bg-close-dark/50 px-2 text-fg-dark transition-colors dark:bg-bg-close/50 dark:text-fg"
            rotationInterval={2e3}
            texts={texts}
            transition={{
              duration: 0.1,
            }}
          />
        </motion.span>
      </LayoutGroup>
      {/* Keep parent large enough for the largest text to avoid layout changes */}
      <span className="invisible grid [grid-template-areas:a]">
        {texts.map((text, index) => (
          <span key={`${index}-${text}`} className="[grid-area:a]">
            {text}
          </span>
        ))}
      </span>
    </span>
  );
}
