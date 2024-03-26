"use client";

import { useRef } from "react";
import Button from "./button";
import LazyImage from "./lazy-image";

interface BackgroundBlurProps {
  /** The background image to use. */
  background: { src: string; alt: string };
  /** The foreground image to use. */
  foreground: { src: string; alt: string };
}

/**
 * An image that blurs the background and zooms the foreground on hover.
 * It has `h-full` and `w-full`.
 */
function BackgroundBlur({ background, foreground }: BackgroundBlurProps) {
  return (
    <div className="relative h-full w-full">
      <div className="peer h-full w-full transition-transform hover:scale-110">
        <LazyImage src={foreground.src} alt={foreground.alt} />
      </div>
      <div className="absolute inset-0 z-[-1] transition peer-hover:blur-sm">
        <LazyImage src={background.src} alt={background.alt} />
      </div>
    </div>
  );
}

export default function Photo() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex flex-col items-center gap-4" ref={ref}>
      <div className="transition-discrete invisible scale-75 opacity-0 transition-all sm:absolute sm:right-[-16px] sm:top-0 sm:translate-x-full dark:visible dark:scale-100 dark:opacity-100">
        <Button
          onClick={() => {
            ref.current?.classList.add("light");
          }}
          aria-label="Clarear foto"
        >
          <span
            className="material-symbols-outlined rotate-180 animate-pulse sm:-rotate-90"
            aria-hidden
            translate="no"
          >
            flashlight_on
          </span>
        </Button>
      </div>
      <div className="jump-in h-48 w-48 overflow-hidden rounded-full border-4 border-primary drop-shadow-[0_0_15px_theme(colors.primary)]">
        <div
          className="transition-discrete absolute hidden h-full w-full transition-all dark:block"
          aria-hidden // Avoid double SR reading
        >
          <BackgroundBlur
            background={{ src: "/my-photo-dark.webp", alt: "Fundo" }}
            foreground={{ src: "/my-photo-no-bg-dark.webp", alt: "Meu rosto" }}
          />
        </div>
        <div className="transition-discrete h-full w-full transition-all dark:pointer-events-none dark:opacity-0">
          <BackgroundBlur
            background={{ src: "/my-photo.webp", alt: "Fundo" }}
            foreground={{ src: "/my-photo-no-bg.webp", alt: "Meu rosto" }}
          />
        </div>
      </div>
    </div>
  );
}
