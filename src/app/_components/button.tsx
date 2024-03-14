import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
import styles from "./button.module.scss";

export type Props = {
  children: React.ReactNode;
  "aria-label"?: string;
  className?: string;
} & (
  | {
      /** Handler for clicks on the button. */
      onClick: React.MouseEventHandler;
      href?: undefined;
      target?: undefined;
    }
  | {
      onClick?: never;
      /** Link the button will send you to. */
      href: string;
      /** Same as <a>'s target. */
      target?: HTMLAttributeAnchorTarget;
    }
);

export default function Button(props: Props) {
  return (
    <>
      {props.onClick ? (
        <button
          {...props}
          className={`${props.className ?? ""} ${styles.button} button`}
          type="button"
        ></button>
      ) : (
        <Link
          {...props}
          className={`${props.className ?? ""} ${styles.button} button`}
        ></Link>
      )}
    </>
  );
}
