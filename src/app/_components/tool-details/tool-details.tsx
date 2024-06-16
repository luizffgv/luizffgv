import Card from "../card";
import TextBody from "../text-body";
import TitledSection from "../titled-section/titled-section";

export interface Props {
  name: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode | undefined;
}

export default function ToolDetails(props: Props): JSX.Element {
  return (
    <Card footer={props.footer}>
      <TitledSection
        level={3}
        title={
          <div className="flex items-center gap-2">
            <div className="h-8 w-8">{props.icon}</div>
            {props.name}
          </div>
        }
      >
        <TextBody>{props.children}</TextBody>
      </TitledSection>
    </Card>
  );
}
