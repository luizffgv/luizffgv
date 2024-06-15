export interface Props {
  children: React.ReactNode;
  footer?: React.ReactNode | undefined;
  level?: "close" | "closer" | undefined;
}

/** A card that can wrap other components. */
export default function Card({
  children,
  footer,
  level = "close",
}: Props): JSX.Element {
  const bg =
    level === "close"
      ? "bg-bg-close dark:bg-bg-close-dark"
      : "bg-bg-closer dark:bg-bg-closer-dark";

  return (
    <div className={`rounded-3xl shadow-sm transition-colors ${bg}`}>
      <div className="flex h-full w-full flex-col justify-between rounded-3xl p-4 dark:[background:radial-gradient(ellipse_at_center,_theme(colors.primary/10%),_transparent)]">
        <div className="flex justify-center">{children}</div>
        {footer && <div className="mt-4 flex justify-center">{footer}</div>}
      </div>
    </div>
  );
}
