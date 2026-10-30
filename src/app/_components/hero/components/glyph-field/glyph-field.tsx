"use client";

import {
  AmpersandsIcon,
  BracesIcon,
  CodeXmlIcon,
  TerminalIcon,
} from "lucide-react";
import { JSX, useEffect, useRef } from "react";

import { startField } from "./field";

const ICON_STROKE_WIDTH = 3;

/** Rasterizable copy of an inline SVG. */
async function loadImage(svg: SVGSVGElement): Promise<HTMLImageElement> {
  const image = new Image();
  image.src = `data:image/svg+xml,${encodeURIComponent(
    new XMLSerializer().serializeToString(svg),
  )}`;
  await image.decode();
  return image;
}

/**
 * Decorative background made of code glyphs that form icons. Clicking the
 * parent element sends a wave through the glyphs that reveals the next icon.
 */
export default function GlyphField(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const icons = iconsRef.current;
    if (canvas == null || icons == null) {
      return;
    }

    let isDiscarded = false;
    let stop: (() => void) | undefined;

    const start = async (): Promise<void> => {
      const [fontFamily] = getComputedStyle(canvas).fontFamily.split(",");
      const [images] = await Promise.all([
        Promise.all(
          [...icons.querySelectorAll("svg")].map((svg) => loadImage(svg)),
        ),
        // Without the font the canvas simply falls back to another one
        document.fonts.load(`16px ${fontFamily}`).catch(() => []),
      ]);

      if (isDiscarded) {
        return;
      }

      stop = startField(canvas, {
        hue: () =>
          Number.parseFloat(
            getComputedStyle(canvas).getPropertyValue("--color-primary"),
          ),
        icons: images,
        isDark: () => document.documentElement.classList.contains("dark"),
        isStatic: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });
    };

    void start();

    return () => {
      isDiscarded = true;
      stop?.();
    };
  }, []);

  return (
    <>
      <canvas
        aria-hidden
        className="absolute inset-0 h-full w-full [font-family:var(--font-share-tech-mono)] [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
        ref={canvasRef}
      />
      {/* Source of the shapes that the canvas draws with glyphs */}
      <div hidden ref={iconsRef}>
        <CodeXmlIcon strokeWidth={ICON_STROKE_WIDTH} />
        <AmpersandsIcon strokeWidth={ICON_STROKE_WIDTH} />
        <BracesIcon strokeWidth={ICON_STROKE_WIDTH} />
        <TerminalIcon strokeWidth={ICON_STROKE_WIDTH} />
      </div>
    </>
  );
}
