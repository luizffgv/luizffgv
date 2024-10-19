import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import Flicker from "../flicker";
import GlowingText from "../glowing-text";
import PixelatedImage from "../pixelated-image";

/** The logo for the website. */
export default function Logo(): JSX.Element {
  const { height } = useViewportSize();
  const [scrollPosition] = useWindowScroll();

  const resolution =
    Math.max(0.1, Math.min(1, 1 - scrollPosition.y / height)) / 5;

  return (
    <div className="jump-in h-48 w-48">
      <GlowingText>
        <Flicker>
          <PixelatedImage
            resolution={resolution}
            paddingPercentage={0.25}
            src="/android-chrome-192x192.png"
            width={192}
          />
        </Flicker>
      </GlowingText>
    </div>
  );
}
