export interface Props {
  /** Value of the underlying input. */
  value: string;
  /** Checkbox state. */
  checked: boolean;
  /** Handler for the change event. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ value, checked, onChange }: Props) {
  return (
    <label className="relative inline-block rounded-lg border border-fg/5 bg-bg-close px-4 py-2 text-center font-bold shadow-sm transition-all hover:brightness-110 has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary has-[:checked]:shadow-[0_0_50px_theme(colors.primary_/_25%)] has-[:checked]:[text-shadow:_0_0_15px_currentcolor] dark:border-fg-dark/10 dark:bg-bg-close-dark dark:has-[:checked]:bg-primary">
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
