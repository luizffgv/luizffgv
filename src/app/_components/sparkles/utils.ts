interface Point {
  x: number;
  y: number;
}

function getRandomPositionInElement(element: HTMLElement): Point {
  const { clientHeight, clientWidth } = element;

  return {
    x: Math.random() * clientWidth,
    y: Math.random() * clientHeight,
  };
}

interface EnsureClipPathExistsProps {
  relativeContainer: HTMLElement;
  uniqueId: string;
}

function ensureClipPathExists({
  relativeContainer,
  uniqueId,
}: EnsureClipPathExistsProps): void {
  const svg =
    [...relativeContainer.children].find(
      (element) => element instanceof SVGElement,
    ) ??
    // eslint-disable-next-line unicorn/prefer-dom-node-append
    relativeContainer.appendChild(
      document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    );

  if (!(svg instanceof SVGElement)) {
    throw new TypeError("Expected SVGElement");
  }

  svg.style.position = "absolute";
  svg.style.width = "0";
  svg.style.height = "0";

  svg.innerHTML = `
    <defs>
      <clipPath id=${uniqueId} clipPathUnits="objectBoundingBox"> 
        <path d="m.414.6458a.0833.0833 90 00-.0599-.0599l-.2556-.0659a.0208.0208 90 010-.0401l.2556-.066a.0833.0833 90 00.0599-.0598l.0659-.2556a.0208.0208 90 01.0401 0l.0659.2556a.0833.0833 90 00.0599.0599l.2556.0659a.0208.0208 90 010 .0402l-.2556.0659a.0833.0833 90 00-.0599.0599l-.0659.2556a.0208.0208 90 01-.0401 0z"/>
      </clipPath>
    </defs>`;
}

interface SpawnSparkleProps {
  relativeContainer: HTMLElement;
  uniqueId: string;
}

export function spawnSparkle({
  relativeContainer,
  uniqueId,
}: SpawnSparkleProps): void {
  ensureClipPathExists({ relativeContainer, uniqueId });
  const sparkle = document.createElement("div");

  sparkle.style.backgroundColor = "#ffffff";
  sparkle.style.clipPath = `url(#${uniqueId})`;
  sparkle.style.backgroundColor = "currentColor";
  sparkle.style.position = "absolute";

  sparkle.style.opacity = String(Math.min(1, Math.random() + 0.5));

  const size = Math.random() * 24 + 12;
  sparkle.style.height = `${size}px`;
  sparkle.style.width = `${size}px`;

  const { x, y } = getRandomPositionInElement(relativeContainer);
  sparkle.style.top = `${y}px`;
  sparkle.style.left = `${x}px`;

  const duration = Math.random() * 700 + 500;

  const appearAnimation = new Animation(
    new KeyframeEffect(
      sparkle,
      {
        scale: [0, 1, 1, 0.75, 0.5, 0.25, 0],
        translate: [
          "-50% -50%",
          `calc(-50% + ${Math.random() * 20 - 10}px) calc(-50% + ${Math.random() * 20 - 10}px)`,
        ],
      },
      {
        duration,
      },
    ),
  );
  appearAnimation.play();
  appearAnimation.addEventListener("finish", () => {
    sparkle.remove();
  });

  const rotationAnimation = new Animation(
    new KeyframeEffect(
      sparkle,
      {
        rotate: [
          `${Math.random() / 4 - 0.125}turn`,
          `${Math.random() / 4 - 0.125}turn`,
        ],
      },
      {
        duration,
      },
    ),
  );
  rotationAnimation.play();

  relativeContainer.append(sparkle);
}
