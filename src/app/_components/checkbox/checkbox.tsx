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
    <label className="bg-bg-checkbox-unchecked relative inline-block rounded-lg border-2 border-primary px-2 py-1 text-center text-base text-primary transition-all hover:brightness-110 has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary dark:bg-bg-close-dark dark:has-[:checked]:bg-primary">
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
