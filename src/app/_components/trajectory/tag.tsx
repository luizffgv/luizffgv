import { JSX } from "react";

export interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
}

/** A short keyword with an icon, to be read at a glance. */
export default function Tag({ children, icon }: Props): JSX.Element {
  return (
    <span className="inline-flex items-center gap-1.5 border border-primary/30 bg-primary/10 px-2 py-1 text-sm text-primary">
      {icon}
      {children}
    </span>
  );
}
