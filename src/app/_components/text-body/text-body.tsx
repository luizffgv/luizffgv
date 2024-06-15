import styles from "./text-body.module.scss";

export interface Props {
  children: React.ReactNode;
}

export default function TextBody(props: Props): JSX.Element {
  return (
    <div className={`max-w-prose ${styles["text-body"]}`}>{props.children}</div>
  );
}
