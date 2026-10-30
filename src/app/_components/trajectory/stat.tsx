import { JSX } from "react";

export interface Props {
  /** How the result was achieved. */
  detail: string;
  label: string;
  value: string;
}

/** A metric that reads as a sentence: the number leads into the prose. */
export default function Stat({ detail, label, value }: Props): JSX.Element {
  return (
    <p>
      <span className="font-code mr-2 text-3xl font-bold text-primary">
        {value}
      </span>
      <span className="font-bold">{label}</span>{" "}
      <span className="opacity-70">{detail}</span>
    </p>
  );
}
