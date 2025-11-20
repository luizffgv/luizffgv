"use client";

import { cva } from "class-variance-authority";
import { motion, useSpring, useTransform } from "framer-motion";
import { ReactNode, useEffect, useId, useRef, useState } from "react";

const segmentedControlOptionCva = cva(
  "flex select-none items-center justify-center rounded-full px-3 py-2 text-base font-medium transition-all",
  {
    variants: {
      active: {
        true: "text-fg-on-primary dark:text-inherit",
        false: "cursor-pointer text-primary",
      },
    },
  },
);

const segmentedControlCva = cva(
  "relative inline-flex items-center gap-4 rounded-full bg-bg-button px-1 text-sm transition-all",
);

const segmentedControlBackgroundContainerCva = cva(
  "pointer-events-none absolute z-[-1] h-[calc(100%_-_8px)]",
);

const segmentedControlBackgroundCva = cva(
  "h-full w-full rounded-full bg-primary",
);

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
  const backgroundRef = useRef<HTMLDivElement>(null);
  const fallbackName = useId();
  const groupName = name ?? `segmented-control-${fallbackName}`;
  const [targetWidth, setTargetWidth] = useState(0);

  const x = useSpring(0, {
    bounce: 1 / 3,
  });
  const xWithUnit = useTransform(x, (latest) => `${latest}px`);
  const scale = useTransform(
    x,
    () =>
      `${1 + Math.abs(x.getVelocity() / 2000)}, ${1 + Math.abs(x.getVelocity()) / 4000}`,
  );

  useEffect(() => {
    const groupElement = groupRef.current;
    if (!groupElement) {
      return;
    }

    const checkedElement = groupElement.querySelector(
      "label:has(input:checked)",
    );
    if (!(checkedElement instanceof HTMLElement)) {
      return;
    }

    const offsetLeft = checkedElement.offsetLeft;
    const { offsetWidth: width } = checkedElement;

    x.set(offsetLeft);
    setTargetWidth(width);
  }, [x, options, value]);

  return (
    <div role="radiogroup" className={segmentedControlCva()} ref={groupRef}>
      <motion.div
        className={segmentedControlBackgroundContainerCva()}
        ref={backgroundRef}
        style={{
          left: xWithUnit,
          scale,
        }}
        animate={{
          width: targetWidth,
        }}
      >
        <div className={segmentedControlBackgroundCva()} />
      </motion.div>
      {options.map(({ value: optionValue, label }) => {
        const isActive = optionValue === value;

        return (
          <label
            key={optionValue}
            className={segmentedControlOptionCva({
              active: isActive,
            })}
          >
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
