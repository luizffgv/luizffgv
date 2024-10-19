"use client";

import Flicker from "../flicker";
import GlowingText from "../glowing-text";
import PixelatedImage from "../pixelated-image";
import { useMediaQuery } from "@mantine/hooks";

export default function Autism(): JSX.Element {
  const md = useMediaQuery("screen and (min-width: 768px)");

  return (
    <section>
      <GlowingText>
        <Flicker>
          <PixelatedImage
            colorOverride={[59, 130, 246, 255]}
            paddingPercentage={0.25}
            resolution={md ? 0.1 : 0.15}
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWluZmluaXR5Ij48cGF0aCBkPSJNMTIgMTJjLTItMi42Ny00LTQtNi00YTQgNCAwIDEgMCAwIDhjMiAwIDQtMS4zMyA2LTRabTAgMGMyIDIuNjcgNCA0IDYgNGE0IDQgMCAwIDAgMC04Yy0yIDAtNCAxLjMzLTYgNFoiLz48L3N2Zz4="
            width={md ? 480 : 128}
          />
        </Flicker>
      </GlowingText>
    </section>
  );
}
