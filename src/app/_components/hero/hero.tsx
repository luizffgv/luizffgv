"use client";

import { JSX, Suspense } from "react";

import ColorCycler from "../color-cycler";
import GlyphField from "./components/glyph-field";
import Text from "./components/text";

export default function Hero(): JSX.Element {
  return (
    <ColorCycler period={18}>
      <div className="font-code relative isolate flex min-h-screen flex-col justify-end overflow-hidden px-8 pb-[10vh] pt-24 transition-colors lg:justify-center lg:pb-0 dark:text-fg-on-primary">
        <GlyphField />
        <div className="z-[1] mx-auto flex w-full max-w-6xl flex-col items-start gap-6">
          <Suspense>
            <Text />
          </Suspense>
        </div>
      </div>
    </ColorCycler>
  );
}
