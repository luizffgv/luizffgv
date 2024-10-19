"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

function flickerLoop(
  element: HTMLDivElement,
  context: { timeout: number | null },
): void {
  element.style.opacity = document.documentElement.classList.contains("dark")
    ? Math.random().toString()
    : "1";

  context.timeout = window.setTimeout(() => {
    flickerLoop(element, context);
  }, Math.random() * 200);
}

export default function Flicker({ children }: Props): JSX.Element {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current == null) {
      throw new TypeError(
        "element ref should never be null in flicker effect call",
      );
    }

    const context: { timeout: number | null } = { timeout: null };
    flickerLoop(element.current, context);

    return () => {
      if (context.timeout != null) {
        window.clearTimeout(context.timeout);
      }
    };
  }, []);

  return <div ref={element}>{children}</div>;
}
