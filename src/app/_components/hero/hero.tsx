"use client";

import { CodeXmlIcon } from "lucide-react";
import { JSX } from "react";

import LayeredText from "../layered-text";
import RotatingColors from "../rotating-colors";

export default function Hero(): JSX.Element {
  return (
    <div className="sm:min-h-auto relative isolate flex min-h-screen flex-col items-center justify-center gap-32 overflow-x-hidden bg-black py-64 text-fg-on-primary transition-colors">
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
        <CodeXmlIcon className="text-black/15 blur-sm" size={400} />
      </div>
      <div className="z-[1] flex flex-col gap-2 px-8">
        <h1 className="gap-5 text-center text-3xl font-bold sm:text-5xl">
          Olá, meu nome é{" "}
          <LayeredText depth="32px" layers={8} perspective="800px">
            <span className="font-display">Luiz</span>
          </LayeredText>
        </h1>
        <p className="text-center text-xl font-medium">
          Eu sou um desenvolvedor focado em Node.js e React
        </p>
      </div>
    </div>
  );
}
