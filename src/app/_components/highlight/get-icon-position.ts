import stringHash from "string-hash";

type GetIconPositionProps = {
  aside: boolean;
  seed: string;
};

type Return = {
  left: number | string;
  rotate: number | string;
  translate: string;
};

export function getIconPosition({ aside, seed }: GetIconPositionProps): Return {
  if (aside) {
    const asideDirection = stringHash(seed) % 2 === 0 ? "left" : "right";

    const rotate = asideDirection === "left" ? -20 : 20;

    return {
      left: asideDirection === "left" ? 0 : "calc(100%)",
      rotate,
      translate: asideDirection === "left" ? "-100%" : "0%",
    };
  } else {
    const left = (stringHash(seed) % 80) - 40;
    const rotate = -20 + (left / 100) * 40;

    return {
      left: `calc(50% + ${left}px)`,
      rotate,
      translate: "-50%",
    };
  }
}
