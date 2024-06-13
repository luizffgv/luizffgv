"use client";

import { useEffect, useRef } from "react";

/** A glow effect that follows the cursor. */
export default function CursorGlow(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current == null) {
      console.error("ref.current is null");
      return;
    }

    const glow = ref.current;

    const onMouseMove = ({ clientX, clientY }: MouseEvent): void => {
      glow.style.opacity = "1";
      glow.style.left = `${clientX}px`;
      glow.style.top = `${clientY}px`;
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-[2] h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity"
    ></div>
  );
}
