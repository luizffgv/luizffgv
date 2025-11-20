import clsx from "clsx";
import { JSX } from "react";

export interface Props {
  /** Value of the underlying input. */
  value: string;
  /** Checkbox state. */
  checked: boolean;
  /** Handler for the change event. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
  value,
  checked,
  onChange,
}: Props): JSX.Element {
  return (
    <label
      className={clsx(
        "relative inline-block rounded-lg bg-primary/10 px-2 py-1 text-center text-base transition-all hover:brightness-110 has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary dark:hover:bg-primary/10 dark:has-[:checked]:bg-primary",
        checked && "active",
      )}
    >
      <input
        className="absolute inset-0 cursor-pointer appearance-none rounded-lg"
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange || (() => {})}
      />
      {value}
    </label>
  );
}
