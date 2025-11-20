"use client";

import { cva } from "class-variance-authority";
import React, { JSX, useEffect, useId, useRef } from "react";

import { spawnSparkle } from "./utils";

const containerCva = cva("relative", {
  variants: {
    isInline: {
      true: "inline-block",
    },
  },
});

export interface SparklesProps {
  children: React.ReactNode;
  classForColor: string;
  isInline?: boolean;
}

export default function Sparkles({
  children,
  classForColor,
  isInline,
}: SparklesProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();

  useEffect(() => {
    const { current } = containerRef;
    if (current == null) {
      return;
    }

    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        spawnSparkle({ uniqueId, relativeContainer: current });
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [uniqueId]);

  return (
    <div className={containerCva({ isInline })}>
      <div className="contents">{children}</div>
      <div
        className={`pointer-events-none absolute inset-0 ${classForColor}`}
        ref={containerRef}
      />
    </div>
  );
}
