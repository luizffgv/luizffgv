"use client";

import clsx from "clsx";
import { JSX } from "react";

import Card from "../card";
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
    <div className={clsx("flex gap-4 sm:gap-6", styles.entry)}>
      <div
        className="hidden shrink-0 justify-end py-[33px] sm:flex"
        style={{ width: auxiliaryWidth }}
      >
        {auxiliaryText}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div
          className={clsx(
            "w-2 grow bg-gradient-to-t from-transparent to-timeline-line transition-colors dark:to-timeline-line-dark",
            styles["line-end"],
          )}
        ></div>
        <div>
          {customDot == null ? (
            <div className="h-6 w-6 bg-primary" />
          ) : (
            customDot
          )}
        </div>
        <div
          className={clsx(
            "w-2 grow bg-gradient-to-b from-transparent to-timeline-line transition-colors dark:to-timeline-line-dark",
            styles["line-start"],
          )}
        ></div>
      </div>
      <div className="min-w-0 max-w-prose py-3">
        <Card
          className="bg-gradient-to-r from-primary/10 to-transparent"
          padding={20}
        >
          <div className="flex w-full flex-col">
            <div className="font-code mb-1 text-sm text-primary sm:hidden">
              {auxiliaryText}
            </div>
            <h3 className="text-2xl font-bold text-primary">{title}</h3>
            <p className="font-bold">{subtitle}</p>
            <div className="mt-3 text-base">{children}</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
