import Card from "../card";
import TextBody from "../text-body";
import TitledSection from "../titled-section/titled-section";

type ChildTool = {
  name: string;
  icon: React.ReactNode;
};

export interface Props {
  name: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode | undefined;
  childTools?: ChildTool[] | undefined;
}

export default function ToolDetails(props: Props): JSX.Element {
  return (
    <article className="flex flex-col gap-2 *:grow">
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
      {props.childTools && (
        <Card>
          <TitledSection level={4} title={"Ferramentas relacionadas"}>
            <div className="flex flex-col gap-2">
              {props.childTools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2">
                  <div className="h-8 w-8">{tool.icon}</div>
                  {tool.name}
                </div>
              ))}
            </div>
          </TitledSection>
        </Card>
      )}
    </article>
  );
}
