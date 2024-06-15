interface Props {
  children: React.ReactNode;
  level?: "close" | "closer" | undefined;
}

/** A card that can wrap other components. */
export default function Card({
  children,
  level = "close",
}: Props): JSX.Element {
  const bg =
    level === "close"
      ? "bg-bg-close dark:bg-bg-close-dark"
      : "bg-bg-closer dark:bg-bg-closer-dark";

  return (
    <div
      className={`rounded-3xl bg-bg-close shadow-sm transition-colors dark:bg-bg-close-dark ${bg}`}
    >
      <div className="h-full w-full rounded-3xl p-4 dark:[background:radial-gradient(ellipse_at_center,_theme(colors.primary/10%),_transparent)]">
        {children}
      </div>
    </div>
  );
}
