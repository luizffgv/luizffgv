export interface Props {
  children: React.ReactNode;
  footer?: React.ReactNode | undefined;
}

/** A card that can wrap other components. */
export default function Card({ children, footer }: Props): JSX.Element {
  return (
    <div
      className={`rounded-3xl bg-bg-close shadow-sm transition-colors dark:bg-bg-close-dark`}
    >
      <div className="flex h-full w-full flex-col justify-between rounded-3xl p-4 dark:[background:radial-gradient(ellipse_at_center,_theme(colors.primary/5%),_transparent)]">
        <div className="flex justify-center">{children}</div>
        {footer && <div className="mt-4 flex justify-center">{footer}</div>}
      </div>
    </div>
  );
}
