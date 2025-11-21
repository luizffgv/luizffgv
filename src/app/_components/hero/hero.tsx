"use client";

import { useToggle } from "@mantine/hooks";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  AmpersandsIcon,
  BracesIcon,
  CodeXmlIcon,
  TerminalIcon,
} from "lucide-react";
import { JSX, useEffect, useRef } from "react";

import LayeredText from "../layered-text";
import RotatingColors from "../rotating-colors";
import RotatingText from "../rotating-text";
import Icon from "./components/icon";

export default function Hero(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const [visibleIcon, switchVisibleIcon] = useToggle([
    "code",
    "ampersands",
    "braces",
    "terminal",
  ] as const);

  const filter = useTransform(
    scrollY,
    (value) => `hue-rotate(${-value / 4 + 90}deg)`,
  );

  useEffect(() => {
    const controller = new AbortController();

    containerRef.current?.addEventListener(
      "click",
      () => {
        switchVisibleIcon();
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [switchVisibleIcon]);

  return (
    <div
      className="sm:min-h-auto relative isolate flex min-h-screen flex-col items-center justify-center gap-32 overflow-x-hidden bg-white py-64 transition-colors dark:bg-black dark:text-fg-on-primary"
      ref={containerRef}
    >
      <div className="absolute h-[200px] w-[800px] rotate-12">
        <RotatingColors colors={["cyan", "magenta", "cyan", "white"]} />
      </div>
      <div className="absolute h-[800px] w-[200px] rotate-45">
        <RotatingColors
          blur="125px"
          colors={["cyan", "magenta", "cyan", "white"]}
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <AnimatePresence mode="wait">
          {visibleIcon === "code" && (
            <Icon key="code">
              <CodeXmlIcon size={400} />
            </Icon>
          )}
          {visibleIcon === "ampersands" && (
            <Icon key="ampersands">
              <AmpersandsIcon size={400} />
            </Icon>
          )}
          {visibleIcon === "braces" && (
            <Icon key="braces">
              <BracesIcon size={400} />
            </Icon>
          )}
          {visibleIcon === "terminal" && (
            <Icon key="terminal">
              <TerminalIcon size={400} />
            </Icon>
          )}
        </AnimatePresence>
      </div>
      <div className="z-[1] flex flex-col gap-2 px-8">
        <h1 className="gap-5 text-center text-3xl font-bold sm:text-5xl">
          Olá, meu nome é{" "}
          <span className="text-fg-on-primary">
            <LayeredText depth="32px" layers={8} perspective="800px">
              <span className="font-display">Luiz</span>
            </LayeredText>
          </span>
        </h1>
        <LayoutGroup>
          <p
            className="text-center text-xl font-medium"
            aria-label="Eu sou um desenvolvedor focado em Node.js, React e TypeScript"
          >
            <span aria-hidden>Eu sou um desenvolvedor focado em</span>{" "}
            <motion.span aria-hidden className="inline-block " layout>
              <RotatingText texts={["Node.js", "React", "TypeScript"]} />
            </motion.span>
          </p>
        </LayoutGroup>
      </div>
      <motion.div
        className="absolute inset-0"
        style={{
          backdropFilter: filter,
        }}
      />
    </div>
  );
}
