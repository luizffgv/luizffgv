export interface Props {
  children: React.ReactNode;
}

/** A strong text with a glow effect. */
export default function GlowingText({ children }: Props): JSX.Element {
  return (
    <strong className="text-primary [filter:drop-shadow(0_0_2em_theme(colors.primary))]">
      {children}
    </strong>
  );
}
