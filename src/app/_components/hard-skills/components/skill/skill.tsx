type Props = {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
};

export default function Skill({ children, icon, title }: Props): JSX.Element {
  return (
    <div className="flex max-w-prose flex-col gap-4">
      <div className="flex items-center gap-4 text-primary">
        <div>{icon}</div>
        <div className="text-2xl font-bold">{title}</div>
      </div>
      {children}
    </div>
  );
}
