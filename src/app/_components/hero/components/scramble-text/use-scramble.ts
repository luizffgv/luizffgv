import { RefObject, useEffect } from "react";

import { GLYPHS } from "../glyph-field/field";

const SCRAMBLE_DURATION = 700;
/** Keeps the glyphs from changing too fast to be seen. */
const FRAME_DURATION = 40;

/** Text partway through changing, with the end still made of random glyphs. */
function scramble(from: string, to: string, progress: number): string {
  const length = Math.round(from.length + (to.length - from.length) * progress);

  return Array.from({ length }, (_, index) => {
    const character = to.charAt(index);

    return index / length < progress || character === " "
      ? character
      : GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
  }).join("");
}

/**
 * Makes the text of an element decode from the glyphs of the hero background.
 * @param ref Element to write the text to.
 * @param texts Texts to cycle through. A single text is only decoded once.
 * @param interval Milliseconds between text changes.
 */
export function useScramble(
  ref: RefObject<Element | null>,
  texts: string[],
  interval: number,
): void {
  useEffect(() => {
    const element = ref.current;
    if (element == null) {
      return;
    }

    const isStatic = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frameId = 0;

    const show = (to: string): void => {
      if (isStatic) {
        element.textContent = to;
        return;
      }

      const from = element.textContent;
      const start = performance.now();
      let lastUpdate = 0;

      const update = (): void => {
        const time = performance.now();
        const progress = Math.min((time - start) / SCRAMBLE_DURATION, 1);

        if (time - lastUpdate >= FRAME_DURATION || progress === 1) {
          element.textContent = scramble(from, to, progress);
          lastUpdate = time;
        }

        if (progress < 1) {
          frameId = requestAnimationFrame(update);
        }
      };

      frameId = requestAnimationFrame(update);
    };

    let index = 0;
    show(texts[index] ?? "");

    const intervalId =
      texts.length > 1
        ? setInterval(() => {
            index = (index + 1) % texts.length;
            show(texts[index] ?? "");
          }, interval)
        : undefined;

    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(intervalId);
    };
  }, [interval, ref, texts]);
}
