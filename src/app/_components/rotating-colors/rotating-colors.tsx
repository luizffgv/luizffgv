import styles from "./rotating-colors.module.scss";
import { useMemo } from "react";

export interface Props {
  /**
   * Size of the blur to be applied.
   * @default "100px"
   */
  blur?: string | undefined;
  /** Colors of the gradient. */
  colors: string[];
}

/** Displays a blurry rounded rotating gradient for a glow effect. */
export default function RotatingColors({
  blur = "100px",
  colors,
}: Props): JSX.Element {
  const background = useMemo(
    () => `conic-gradient(from 0deg, ${colors.join(", ")})`,
    [colors],
  );

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-full"
      style={{ filter: `blur(${blur})` }}
    >
      <div className={styles.gradient} style={{ background }}></div>
    </div>
  );
}
