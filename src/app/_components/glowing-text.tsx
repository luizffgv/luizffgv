export interface Props {
  children: React.ReactNode;
}

/** A strong text with a glow effect. */
export default function GlowingText({ children }: Props) {
  return (
    <strong className="text-primary [text-shadow:_0_0_2em_theme(colors.primary)]">
      {children}
    </strong>
  );
}
