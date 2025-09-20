"use client";

import { CodeXmlIcon } from "lucide-react";

import LayeredText from "../layered-text";

export default function Hero(): JSX.Element {
  return (
    <div className="sm:min-h-auto relative isolate flex min-h-screen flex-col items-center justify-center gap-32 overflow-x-hidden bg-primary py-64 text-fg-on-primary transition-colors dark:text-fg">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LayeredText depth="32px" layers={8} perspective="800px">
          <CodeXmlIcon className="opacity-25" size={400} />
        </LayeredText>
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-primary from-20% to-transparent"></div>
      </div>
      <div className="z-[1] flex flex-col gap-2 px-8">
        <h1 className="gap-5 text-center text-3xl font-bold sm:text-5xl">
          Olá, meu nome é{" "}
          <LayeredText depth="32px" layers={8} perspective="800px">
            Luiz
          </LayeredText>
        </h1>
        <p className="text-center text-xl font-medium">
          Eu sou um desenvolvedor focado em Node.js e React
        </p>
      </div>
      <div className="text-8xl"></div>
    </div>
  );
}
