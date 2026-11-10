import { JSX } from "react";

interface HeadingProps {
  /// The level of the heading.
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

/// A standard styled heading with a specified level.
function Heading({ level, children }: HeadingProps): JSX.Element {
  return level === 1 ? (
    <h1 className="font-display mb-8 text-balance text-center text-[length:clamp(1.75rem,4vw,3rem)] uppercase leading-[1.05] tracking-tight">
      {children}
    </h1>
  ) : level === 2 ? (
    <h2 className="font-display mb-12 text-balance text-center text-[length:clamp(1.75rem,4vw,3rem)] uppercase leading-[1.05] tracking-tight">
      {children}
    </h2>
  ) : level === 3 ? (
    <h3 className="mb-4 text-balance text-center text-xl tracking-tight">
      {children}
    </h3>
  ) : level === 4 ? (
    <h4 className="mb-2 text-center text-lg">{children}</h4>
  ) : level === 5 ? (
    <h5 className="mb-2 text-center text-lg">{children}</h5>
  ) : (
    <h6 className="mb-2 text-center text-lg">{children}</h6>
  );
}

export interface Props {
  /// Contents of the section heading.
  title: React.ReactNode;
  /// Level of the section.
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

/// A standard section with a title and contents.
export default function TitledSection({
  title,
  children,
  level,
}: Props): JSX.Element {
  return (
    <section>
      <Heading level={level}>{title}</Heading>
      {children}
    </section>
  );
}
