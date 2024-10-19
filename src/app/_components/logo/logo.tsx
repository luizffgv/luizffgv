import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import PixelatedImage from "../pixelated-image";

/** The logo for the website. */
export default function Logo(): JSX.Element {
  const { height } = useViewportSize();
  const [scrollPosition] = useWindowScroll();

  const resolution =
    Math.max(0.1, Math.min(1, 1 - scrollPosition.y / height)) / 5;

  return (
    <div className="jump-in h-48 w-48">
      <PixelatedImage
        resolution={resolution}
        paddingPercentage={0.25}
        src="/android-chrome-192x192.png"
        width={192}
      />
    </div>
  );
}
