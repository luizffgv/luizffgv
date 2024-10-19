/** A color in RBA format, 0-255. */
export type Color = [number, number, number, number];

type DrawProps = {
  canvas: HTMLCanvasElement;
  colorOverride?: Color | undefined;
  image: HTMLImageElement;
  padding: number;
  resolution: number;
};

const NUM_CHANNELS = 4;

export function draw({
  canvas,
  colorOverride,
  image,
  padding,
  resolution,
}: DrawProps): void {
  if (canvas.width === 0 || canvas.height === 0) {
    return;
  }

  const ctx = canvas.getContext("2d");

  if (ctx == null) {
    throw new Error("Couldn't get canvas 2D context");
  }

  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const PIXEL_SIZE = Math.round(1 / resolution);

  const PIXEL_SIZE_WITHOUT_PADDING = PIXEL_SIZE - PIXEL_SIZE * padding;

  const countPixelsH = Math.floor(canvas.height / PIXEL_SIZE);
  const countPixelsW = Math.floor(canvas.width / PIXEL_SIZE);

  const samplingStartX = Math.floor(
    (canvas.width - countPixelsW * PIXEL_SIZE) / 2,
  );
  const samplingStartY = Math.floor(
    (canvas.height - countPixelsH * PIXEL_SIZE) / 2,
  );

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let pixelY = 0; pixelY < countPixelsH; ++pixelY) {
    for (let pixelX = 0; pixelX < countPixelsW; ++pixelX) {
      const centerX =
        samplingStartX + pixelX * PIXEL_SIZE + Math.round(PIXEL_SIZE / 2);
      const centerY =
        samplingStartY + pixelY * PIXEL_SIZE + Math.round(PIXEL_SIZE / 2);

      const underlyingPixelIndex =
        centerY * canvas.width * NUM_CHANNELS + centerX * NUM_CHANNELS;

      const [r, g, b, a] = imageData.data
        .slice(underlyingPixelIndex, underlyingPixelIndex + NUM_CHANNELS)
        .map((channel) => Math.round(channel));

      ctx.fillStyle = colorOverride
        ? `rgba(${colorOverride[0]}, ${colorOverride[1]}, ${colorOverride[2]}, ${(colorOverride[3] * (a / 255)) / 255})`
        : `rgba(${r}, ${g}, ${b}, ${a})`;
      ctx.beginPath();
      ctx.arc(
        samplingStartX + pixelX * PIXEL_SIZE + PIXEL_SIZE / 2,
        samplingStartY + pixelY * PIXEL_SIZE + PIXEL_SIZE / 2,
        PIXEL_SIZE_WITHOUT_PADDING / 2,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }
  }
}
