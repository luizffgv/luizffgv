"use client";

import { useEffect, useRef } from "react";

export type Props = {
  /// Name of the tool.
  name: string;
  /// Details to show along with the tool.
  details?: string;
  /// Accent color for the tool.
  color?: string;
};

export default function Tool(props: Props) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.color == null) return;

    if (glowRef.current == null) {
      console.error("glowRef is null");
      return;
    }

    const glow = glowRef.current;

    const delay = Math.random() * 5;
    glowRef.current.style.animationDelay = `${delay}s`;

    return () => {
      glow.style.animationDelay = "";
    };
  }, [props.color]);

  return (
    <div
      className="flex flex-col items-center gap-4"
      role="group"
      aria-label={props.name}
    >
      <div className="flex flex-col items-center">
        <div className="font-display relative text-center text-lg font-bold">
          {"color" in props && (
            <div
              ref={glowRef}
              className="absolute inset-0 animate-[pulse_5s_infinite] rounded-full blur-2xl"
              style={{
                backgroundColor: props.color,
              }}
            ></div>
          )}
          <span>{props.name}</span>
        </div>
        {props.details != null && (
          <div className="text-center">{props.details}</div>
        )}
      </div>
    </div>
  );
}
