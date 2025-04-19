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
    <label className="relative inline-block rounded-lg bg-bg-checkbox-unchecked px-3 py-2 text-center text-base text-primary transition-all hover:brightness-110 has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary dark:bg-primary/5 dark:hover:bg-primary/10 dark:has-[:checked]:bg-primary">
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
