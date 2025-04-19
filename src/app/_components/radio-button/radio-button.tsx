export interface Props {
  /** `value` attribute for the underlying input. */
  value: string;
  /** Whether the radio button is checked. */
  checked: boolean;
  /** `name` attribute for the underlying input. */
  name: string;
  /** Radio button label. */
  children: React.ReactNode;
  /** Handler for the change event. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioButton({
  value,
  checked,
  name,
  children,
  onChange,
}: Props): JSX.Element {
  return (
    <label className="relative inline-block rounded-3xl bg-bg-checkbox-unchecked px-3 py-2 text-center text-primary transition-all has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary dark:bg-primary/5 dark:hover:bg-primary/10 dark:has-[:checked]:bg-primary">
      <input
        className="absolute inset-0 cursor-pointer appearance-none rounded-3xl checked:cursor-default"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange || (() => {})}
      />
      {children}
    </label>
  );
}
