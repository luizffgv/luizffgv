interface Props {
  children: React.ReactNode;
}

/** A card that can wrap other components. */
export default function Card({ children }: Props) {
  return (
    <div className="rounded-3xl bg-bg-close p-4 shadow-sm transition-colors dark:bg-bg-close-dark">
      {children}
    </div>
  );
}
