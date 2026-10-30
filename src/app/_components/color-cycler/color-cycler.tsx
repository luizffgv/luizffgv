"use client";

import { JSX, useEffect, useRef } from "react";

export interface Props {
  children: React.ReactNode;
  offset?: number;
  /** Seconds taken to complete a full hue rotation. */
  period?: number;
}

/**
 * Darkens hues in the yellow-to-cyan range, which are perceptually lighter, so
 * the accent keeps at least a 4.5:1 contrast against a white background.
 */
function lightnessFor(hue: number): number {
  const distance = Math.abs(((hue - 120 + 540) % 360) - 180);
  const bump =
    distance < 120 ? (1 + Math.cos((Math.PI * distance) / 120)) / 2 : 0;
  return 40 - 24 * bump;
}

export default function ColorCycler({
  children,
  offset = 0,
  period = 90,
}: Props): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = ref;
    if (current == null) {
      return;
    }

    const setHue = (degrees: number): void => {
      current.style.setProperty(
        "--primary-light",
        `${degrees}, 70%, ${lightnessFor(degrees)}%`,
      );
      current.style.setProperty("--primary-dark", `${degrees}, 80%, 68%`);
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      setHue(offset % 360);
      return;
    }

    const startTimestamp = Date.now();

    let shouldDiscard = false;
    let animationFrameId = 0;

    const callback = (): void => {
      if (shouldDiscard) {
        return;
      }

      if (animationFrameId++ % 15 !== 0) {
        requestAnimationFrame(callback);
        return;
      }

      const dt = Date.now() - startTimestamp;

      setHue(((dt / (period * 1000)) * 360 + offset) % 360);

      requestAnimationFrame(callback);
    };

    requestAnimationFrame(callback);

    return () => {
      shouldDiscard = true;
    };
  }, [offset, period]);

  return (
    <div
      className="contents [--color-primary:var(--primary-light)] dark:[--color-primary:var(--primary-dark)]"
      ref={ref}
    >
      {children}
    </div>
  );
}
