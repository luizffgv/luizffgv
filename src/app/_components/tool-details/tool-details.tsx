"use client";

import Card from "@components/card";
import TextBody from "../text-body";
import TitledSection from "../titled-section/titled-section";
import { motion } from "framer-motion";
import stringHash from "string-hash";
import { useMemo } from "react";

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
  const rotation = useMemo(
    () => (stringHash(props.name) % 5) - 2.5,
    [props.name],
  );

  return (
    <motion.article
      initial={{
        rotate: -rotation,
      }}
      whileInView={{
        rotate: rotation,
      }}
    >
      <Card>
        <TitledSection
          level={3}
          title={
            <div className="flex items-center gap-2">
              <div className="h-8 w-8">{props.icon}</div>
              {props.name}
            </div>
          }
        >
          <div className="flex flex-col gap-8">
            <TextBody>{props.children}</TextBody>
            {props.footer && <div>{props.footer}</div>}
            {props.childTools && (
              <TitledSection
                level={4}
                title={
                  <div className="text-start">Ferramentas relacionadas</div>
                }
              >
                <div className="flex flex-col gap-2">
                  {props.childTools.map((tool) => (
                    <div key={tool.name} className="flex items-center gap-2">
                      <div className="h-6 w-6">{tool.icon}</div>
                      {tool.name}
                    </div>
                  ))}
                </div>
              </TitledSection>
            )}
          </div>
        </TitledSection>
      </Card>
    </motion.article>
  );
}
