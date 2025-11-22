"use client";

import { JSX, useEffect, useRef } from "react";

interface ReactBitsNoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

export function ReactBitsNoise({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}: ReactBitsNoiseProps): JSX.Element {
  const grainRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      return;
    }

    let frame = 0;
    let animationId: number;

    const canvasSize = 1024;

    const resize = (): void => {
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
    };

    const drawGrain = (): void => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      for (let index = 0; index < data.length; index += 4) {
        const value = Math.random() * 255;
        data[index] = value;
        data[index + 1] = value;
        data[index + 2] = value;
        data[index + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = (): void => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [
    patternSize,
    patternScaleX,
    patternScaleY,
    patternRefreshInterval,
    patternAlpha,
  ]);

  return (
    <canvas
      className="pointer-events-none absolute left-0 top-0 h-screen w-screen"
      ref={grainRef}
      style={{
        imageRendering: "pixelated",
      }}
    />
  );
}
