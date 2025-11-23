"use client";

import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { JSX, ReactNode, useId, useRef } from "react";

const segmentedControlOptionCva = cva(
  "relative flex select-none items-center justify-center px-8 py-2 text-base font-bold transition-all",
  {
    variants: {
      active: {
        true: "text-fg-on-primary dark:text-inherit",
        false: "cursor-pointer text-primary hover:bg-primary/15",
      },
    },
  },
);

const segmentedControlCva = cva(
  "relative inline-flex items-center text-sm transition-all",
);

const segmentedControlBgCva = cva(
  "bg-bg-segmented-control dark:bg-bg-segmented-control-dark border-border-segmented-control absolute inset-0 z-[-1] border-2",
);

const segmentedControlHighlightCva = cva("absolute inset-0 z-[-1] bg-primary");

interface SegmentedControlLabelRendererProps {
  isActive: boolean;
}

export type SegmentedControlLabelRenderer = (
  props: SegmentedControlLabelRendererProps,
) => JSX.Element;

export interface SegmentedControlOption {
  value: string;
  label: ReactNode | SegmentedControlLabelRenderer;
}

export interface SegmentedControlProps {
  options: SegmentedControlOption[];
  value: string;
  onChange?: (value: string) => void;
  name?: string;
}

export default function SegmentedControl({
  options,
  value,
  onChange,
  name,
}: SegmentedControlProps): JSX.Element {
  const groupRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const groupName = name ?? `${id}-segmented-control`;

  return (
    <div role="radiogroup" className={segmentedControlCva()} ref={groupRef}>
      <div className={segmentedControlBgCva()} />
      {options.map(({ value: optionValue, label }) => {
        const isActive = optionValue === value;

        return (
          <label
            key={optionValue}
            className={segmentedControlOptionCva({
              active: isActive,
            })}
          >
            {isActive && (
              <motion.div
                className={segmentedControlHighlightCva()}
                layoutId={`${id}-selected-background`}
                transition={{
                  type: "spring",
                  duration: 0.5,
                }}
              />
            )}
            <input
              type="radio"
              className="sr-only"
              name={groupName}
              value={optionValue}
              checked={isActive}
              onChange={() => {
                onChange?.(optionValue);
              }}
            />
            <div className="flex items-center gap-2">
              {typeof label === "function" ? label({ isActive }) : label}
            </div>
          </label>
        );
      })}
    </div>
  );
}
