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
    <label className="relative inline-block rounded-3xl border border-fg/5 bg-bg-close px-4 py-2 text-center font-bold shadow-sm transition-all has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary has-[:checked]:shadow-[0_0_50px_theme(colors.primary_/_25%)] has-[:checked]:[text-shadow:_0_0_15px_currentcolor] has-[:not(:checked)]:hover:brightness-110 dark:border-fg-dark/10 dark:bg-bg-close-dark dark:has-[:checked]:bg-primary">
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
