"use client";

import { useEffect, useRef } from "react";

export interface Props {
  children: React.ReactNode;
}

export default function ColorCycler({ children }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = ref;
    if (current == null) {
      return;
    }

    const startTimestamp = Date.now();

    let shouldDiscard = false;

    const callback = (): void => {
      if (shouldDiscard) {
        return;
      }

      const now = Date.now();

      const dt = now - startTimestamp;

      const degrees = (Math.floor(dt / 100) + 220) % 360;

      current.style.setProperty("--color-primary", `${degrees}deg, 70%, 40%`);

      requestAnimationFrame(callback);
    };

    requestAnimationFrame(callback);

    return () => {
      shouldDiscard = true;
    };
  }, []);

  return (
    <div className="contents" ref={ref}>
      {children}
    </div>
  );
}
