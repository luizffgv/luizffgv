"use client";

import { JSX, useEffect, useRef } from "react";

export interface Props {
  children: React.ReactNode;
  offset?: number;
}

export default function ColorCycler({
  children,
  offset = 0,
}: Props): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = ref;
    if (current == null) {
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

      const now = Date.now();

      const dt = now - startTimestamp;

      const degrees = (Math.floor(dt / 50) + offset) % 360;

      current.style.setProperty("--color-primary", `${degrees}, 70%, 40%`);

      requestAnimationFrame(callback);
    };

    requestAnimationFrame(callback);

    return () => {
      shouldDiscard = true;
    };
  }, [offset]);

  return (
    <div className="contents" ref={ref}>
      {children}
    </div>
  );
}
