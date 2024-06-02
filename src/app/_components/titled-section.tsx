interface HeadingProps {
  /// The level of the heading.
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

/// A standard styled heading with a specified level.
function Heading({ level, children }: HeadingProps): JSX.Element {
  return level === 1 ? (
    <h1 className="mb-8 text-center text-3xl">{children}</h1>
  ) : level === 2 ? (
    <h2 className="mb-6 text-center text-2xl">{children}</h2>
  ) : level === 3 ? (
    <h3 className="mb-4 text-center text-xl">{children}</h3>
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
