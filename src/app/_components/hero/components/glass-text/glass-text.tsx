"use client";

import { JSX, useId, useRef } from "react";

import { useScramble } from "../scramble-text";

export interface Props {
  text: string;
}

/**
 * Text that decodes from the glyphs of the hero background and then works as a
 * window to them, as glass in the shape of its letters. Takes the font from its
 * parent.
 */
export default function GlassText({ text }: Props): JSX.Element {
  const id = useId();
  const clipId = `${id}-clip`;
  const textId = `${id}-text`;

  const ref = useRef<SVGTextElement>(null);
  useScramble(ref, [text], 0);

  return (
    <span aria-hidden className="relative inline-block py-[0.1em]">
      <span className="invisible">{text}</span>
      {/* Goes past the right edge as negative letter spacing makes text overflow */}
      <span
        className="backdrop-glass backdrop-smoked absolute inset-y-0 -right-[0.1em] left-0 bg-primary/40 dark:bg-black/25"
        style={{ clipPath: `url("#${clipId}")` }}
      />
      <svg className="absolute inset-0 size-full overflow-visible">
        <defs>
          <clipPath id={clipId}>
            <text id={textId} ref={ref} y="0.9em">
              {text}
            </text>
          </clipPath>
        </defs>
        {/* Keeps the letters readable where there is little behind the glass */}
        <use
          className="fill-none stroke-primary opacity-30 [stroke-width:0.005em] dark:stroke-fg-on-primary"
          href={`#${textId}`}
        />
      </svg>
    </span>
  );
}
