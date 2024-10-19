"use client";

import { useEffect, useRef, useState } from "react";
import { draw } from "./draw";
import { useResizeObserver } from "@mantine/hooks";

type Props = {
  height?: number | undefined;
  /**
   * How much padding there will be around each pixel. This doesn't change the
   * resolution, but will visually shrink the pixels to give a margin between
   * them.
   */
  paddingPercentage: number | undefined;
  /**
   * How much the image should be pixelated.
   *
   * - **1** means a 100x100 image will have 100x100 sections.
   * - **0.5** means a 100x100 image will have 50x50 sections, each section being 2x2 pixels.
   * - **0.25** means a 100x100 image will have 25x25 sections, each section being 4x4 pixels.
   */
  resolution: number;
  src: string;
  width?: number | undefined;
};

export default function PixelatedImage({
  height,
  paddingPercentage: padding = 0,
  resolution,
  src,
  width,
}: Props): JSX.Element {
  const [image, rect] = useResizeObserver<HTMLImageElement>();
  const canvas = useRef<HTMLCanvasElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  useEffect(() => {
    if (!isImageLoaded) {
      return;
    }

    if (canvas.current == null) {
      throw new TypeError(
        "canvas ref should never be null on PixelatedImage effect",
      );
    }

    if (image.current == null) {
      throw new TypeError(
        "image ref should never be null on PixelatedImage effect",
      );
    }

    draw({ canvas: canvas.current, image: image.current, padding, resolution });
  }, [canvas, image, isImageLoaded, padding, rect, resolution, src]);

  return (
    <div className="relative w-fit">
      <img
        style={{
          height,
          width,
        }}
        className="invisible"
        ref={image}
        alt=""
        src={src}
        onLoadStart={() => {
          setIsImageLoaded(false);
        }}
        onLoad={() => {
          setIsImageLoaded(true);
        }}
      />
      <canvas
        style={{
          height: rect.height,
          width: rect.width,
        }}
        className="absolute left-0 top-0 h-full w-full"
        ref={canvas}
        height={rect.height}
        width={rect.width}
      />
    </div>
  );
}
