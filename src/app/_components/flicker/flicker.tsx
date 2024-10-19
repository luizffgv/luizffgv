"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  maxOpacity?: number | undefined;
  minOpacity?: number | undefined;
};

type FlickerLoopProps = {
  context: { timeout: number | null };
  element: HTMLDivElement;
  maxOpacity: number;
  minOpacity: number;
};

function flickerLoop({
  context,
  element,
  maxOpacity,
  minOpacity,
}: FlickerLoopProps): void {
  element.style.opacity = document.documentElement.classList.contains("dark")
    ? `${Math.random() * (maxOpacity - minOpacity) + minOpacity}`
    : "1";

  context.timeout = window.setTimeout(() => {
    flickerLoop({ context, element, maxOpacity, minOpacity });
  }, Math.random() * 200);
}

export default function Flicker({
  children,
  maxOpacity = 1,
  minOpacity = 0,
}: Props): JSX.Element {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current == null) {
      throw new TypeError(
        "element ref should never be null in flicker effect call",
      );
    }

    const context: { timeout: number | null } = { timeout: null };
    flickerLoop({ context, element: element.current, maxOpacity, minOpacity });

    return () => {
      if (context.timeout != null) {
        window.clearTimeout(context.timeout);
      }
    };
  }, [maxOpacity, minOpacity]);

  return <div ref={element}>{children}</div>;
}
