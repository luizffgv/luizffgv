"use client";

import clsx from "clsx";

import { useTimelineContext } from "./_contexts/timeline";
import styles from "./entry.module.scss";

type Props = {
  auxiliaryText: React.ReactNode;
  children?: React.ReactNode;
  customDot?: React.ReactNode;
  subtitle?: React.ReactNode;
  title: React.ReactNode;
};

export default function Entry({
  auxiliaryText,
  children,
  customDot,
  subtitle,
  title,
}: Props): JSX.Element {
  const { auxiliaryWidth } = useTimelineContext();

  return (
    <div className={clsx("flex gap-6", styles.entry)}>
      <div
        className="flex shrink-0 justify-end py-6"
        style={{ width: auxiliaryWidth }}
      >
        {auxiliaryText}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div
          className={clsx(
            "w-2 grow rounded-b-full bg-timeline-line transition-colors dark:bg-timeline-line-dark",
            styles["line-end"],
          )}
        ></div>
        {customDot == null ? (
          <div className="h-6 w-6 rounded-full bg-primary" />
        ) : (
          customDot
        )}
        <div
          className={clsx(
            "w-2 grow rounded-t-full bg-timeline-line transition-colors dark:bg-timeline-line-dark",
            styles["line-start"],
          )}
        ></div>
      </div>
      <div className="flex flex-col py-6">
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="font-bold">{subtitle}</p>
        <div className="max-w-prose text-sm text-fg-weak">{children}</div>
      </div>
    </div>
  );
}
