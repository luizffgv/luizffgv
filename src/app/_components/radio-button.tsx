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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioButton({
  value,
  checked,
  name,
  children,
  onChange,
}: Props) {
  return (
    <label className="relative inline-block rounded-lg border border-fg/5 bg-bg-close px-4 py-2 text-center font-bold shadow-sm transition-all hover:brightness-110 has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary has-[:checked]:shadow-[0_0_10px_theme(colors.primary)] dark:border-fg-dark/10 dark:bg-bg-close-dark dark:has-[:checked]:bg-primary">
      <input
        className="absolute inset-0 cursor-pointer appearance-none rounded-lg"
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
