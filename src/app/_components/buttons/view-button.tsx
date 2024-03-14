import type { Props } from "../button";
import Button from "../button";
import styles from "./view-button.module.scss";

export default function ViewButton(props: Props) {
  return (
    <Button {...props} className={`${props.className ?? ""} ${styles.button}`}>
      <span
        className={`${styles.icon} material-symbols-outlined`}
        aria-hidden="true"
      >
        visibility
      </span>
      {props.children}
    </Button>
  );
}
