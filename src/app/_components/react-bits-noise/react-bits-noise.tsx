"use client";

import { JSX, useEffect, useRef } from "react";

const TILE_SIZE = 256;
const TILE_ALPHA = 15;

/** Renders a tile of grain once, for CSS to repeat and shift around. */
function createTile(): string | undefined {
  const canvas = document.createElement("canvas");
  canvas.width = TILE_SIZE;
  canvas.height = TILE_SIZE;

  const context = canvas.getContext("2d");
  if (context == null) {
    return undefined;
  }

  const imageData = context.createImageData(TILE_SIZE, TILE_SIZE);
  const { data } = imageData;

  for (let index = 0; index < data.length; index += 4) {
    const value = Math.random() * 255;
    data[index] = value;
    data[index + 1] = value;
    data[index + 2] = value;
    data[index + 3] = TILE_ALPHA;
  }

  context.putImageData(imageData, 0, 0);

  return canvas.toDataURL();
}

export function ReactBitsNoise(): JSX.Element {
  const grainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grain = grainRef.current;
    const tile = createTile();

    if (grain != null && tile != null) {
      grain.style.backgroundImage = `url(${tile})`;
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute -inset-[512px] will-change-transform [background-size:512px] [image-rendering:pixelated] motion-safe:animate-[noise_330ms_steps(1)_infinite]"
        ref={grainRef}
      />
    </div>
  );
}
