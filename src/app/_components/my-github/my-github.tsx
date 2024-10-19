"use client";

import { FolderGit2Icon, PackageIcon } from "lucide-react";
import Button from "@components/button";
import Flicker from "../flicker";
import GlowingText from "@components/glowing-text";
import Link from "next/link";
import PixelatedImage from "../pixelated-image";
import TitledSection from "@components/titled-section";
import { useMediaQuery } from "@mantine/hooks";

export default function MyGitHub(): JSX.Element {
  const md = useMediaQuery("screen and (min-width: 768px)");

  return (
    <TitledSection
      level={2}
      title={
        <>
          Dê uma olhada em meu{" "}
          <Link href="https://www.github.com/luizffgv" target="_blank">
            <GlowingText>GitHub</GlowingText>
          </Link>
        </>
      }
    >
      <div className="relative isolate flex flex-col flex-wrap justify-center gap-8">
        <div className="absolute left-1/2 top-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 rotate-45 sm:block">
          <GlowingText>
            <div className="-rotate-45 opacity-50">
              <Flicker>
                <PixelatedImage
                  colorOverride={[59, 130, 246, 255]}
                  paddingPercentage={0.25}
                  resolution={0.1}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdpdC1wdWxsLXJlcXVlc3QtYXJyb3ciPjxjaXJjbGUgY3g9IjUiIGN5PSI2IiByPSIzIi8+PHBhdGggZD0iTTUgOXYxMiIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMTgiIHI9IjMiLz48cGF0aCBkPSJtMTUgOS0zLTMgMy0zIi8+PHBhdGggZD0iTTEyIDZoNWEyIDIgMCAwIDEgMiAydjciLz48L3N2Zz4="
                  width={md ? 256 : 192}
                />
              </Flicker>
            </div>
            <div className="-rotate-45 opacity-50">
              <Flicker>
                <PixelatedImage
                  colorOverride={[59, 130, 246, 255]}
                  paddingPercentage={0.25}
                  resolution={0.1}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBhY2thZ2UiPjxwYXRoIGQ9Ik0xMSAyMS43M2EyIDIgMCAwIDAgMiAwbDctNEEyIDIgMCAwIDAgMjEgMTZWOGEyIDIgMCAwIDAtMS0xLjczbC03LTRhMiAyIDAgMCAwLTIgMGwtNyA0QTIgMiAwIDAgMCAzIDh2OGEyIDIgMCAwIDAgMSAxLjczeiIvPjxwYXRoIGQ9Ik0xMiAyMlYxMiIvPjxwYXRoIGQ9Im0zLjMgNyA3LjcwMyA0LjczNGEyIDIgMCAwIDAgMS45OTQgMEwyMC43IDciLz48cGF0aCBkPSJtNy41IDQuMjcgOSA1LjE1Ii8+PC9zdmc+"
                  width={md ? 256 : 192}
                />
              </Flicker>
            </div>
          </GlowingText>
        </div>
        <TitledSection
          level={3}
          title="Eu tenho vários projetos open source e alguns pacotes NPM"
        >
          <div className="flex flex-wrap items-center gap-4 *:grow">
            <Button href="https://www.github.com/luizffgv/" target="_blank">
              <FolderGit2Icon />
              Meu GitHub
            </Button>
            <Button href="/projetos?tags=Pacote%20NPM" target="_blank">
              <PackageIcon />
              Meus pacotes NPM
            </Button>
          </div>
        </TitledSection>
      </div>
    </TitledSection>
  );
}
