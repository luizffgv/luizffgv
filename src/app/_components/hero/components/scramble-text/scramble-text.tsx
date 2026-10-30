"use client";

import clsx from "clsx";
import { JSX, useRef } from "react";

import { useScramble } from "./use-scramble";

export interface Props {
  className?: string;
  /** Milliseconds between text changes. */
  interval?: number;
  /** Texts to cycle through. A single text is only decoded once. */
  texts: string[];
}

/**
 * Text that decodes from the glyphs of the hero background. It takes the space
 * of the largest text to avoid layout changes.
 */
export default function ScrambleText({
  className,
  interval = 3e3,
  texts,
}: Props): JSX.Element {
  const ref = useRef<HTMLSpanElement>(null);

  useScramble(ref, texts, interval);

  return (
    <span aria-hidden className="inline-grid">
      <span className={clsx("[grid-area:1/1]", className)} ref={ref}>
        {texts[0]}
      </span>
      {texts.map((text) => (
        <span
          className={clsx("invisible [grid-area:1/1]", className)}
          key={text}
        >
          {text}
        </span>
      ))}
    </span>
  );
}
