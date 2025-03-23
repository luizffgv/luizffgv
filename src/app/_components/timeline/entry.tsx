"use client";

import clsx from "clsx";
import { useTimelineContext } from "./_contexts/timeline";
import styles from "./entry.module.scss";

type Props = {
  auxiliaryText: string;
  children?: React.ReactNode;
  subtitle?: string;
  title: string;
};

export default function Entry({
  auxiliaryText,
  children,
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
            "bg-timeline-line dark:bg-timeline-line-dark w-2 grow rounded-b-full transition-colors",
            styles["line-end"],
          )}
        ></div>
        <div className="h-6 w-6 rounded-full bg-primary"></div>
        <div
          className={clsx(
            "bg-timeline-line dark:bg-timeline-line-dark w-2 grow rounded-t-full transition-colors",
            styles["line-start"],
          )}
        ></div>
      </div>
      <div className="flex flex-col py-6">
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="font-bold">{subtitle}</p>
        <div className="text-fg-weak hidden max-w-prose text-sm sm:block">
          {children}
        </div>
      </div>
    </div>
  );
}
