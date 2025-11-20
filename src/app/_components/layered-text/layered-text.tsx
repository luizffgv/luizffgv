"use client";

import { JSX, PropsWithChildren } from "react";

import styles from "./layered-text.module.scss";

declare module "react" {
  interface CSSProperties {
    "--depth"?: string;
    "--index"?: number;
    "--layers"?: number;
    "--progress"?: number;
  }
}

export interface Props extends PropsWithChildren {
  depth: string;
  layers: number;
  perspective: string;
}

export default function LayeredText({
  children,
  depth,
  layers,
  perspective,
}: Props): JSX.Element {
  return (
    <div
      className="inline-block w-fit"
      style={{
        perspective,
      }}
    >
      <div
        className={`relative ${styles.parent}`}
        style={{
          "--depth": depth,
          "--layers": layers,
        }}
      >
        <span className={styles["first-layer"]}>{children}</span>
        {Array.from({ length: layers }).map((_, index) => (
          <span
            aria-hidden
            className={`absolute inset-0 ${styles.layer}`}
            key={index}
            style={{
              "--progress": (index + 1) / layers,
              "--index": index,
            }}
          >
            {children}
          </span>
        ))}
      </div>
    </div>
  );
}
