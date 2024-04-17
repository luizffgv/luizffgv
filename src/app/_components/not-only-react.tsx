import { EyeIcon } from "lucide-react";
import Button from "./button";
import GlowingText from "./glowing-text";
import TitledSection from "./titled-section";
import Tools from "./tools";

export default function NotOnlyReact() {
  return (
    <>
      <TitledSection level={2} title="Mas eu não sei apenas React">
        <div className="flex flex-col items-center gap-16">
          <TitledSection
            level={3}
            title={
              <span>
                Eu tenho conhecimento nestes{" "}
                <GlowingText>frameworks</GlowingText>,
              </span>
            }
          >
            <Tools kind="framework"></Tools>
          </TitledSection>
          <TitledSection
            level={3}
            title={
              <span>
                nestas <GlowingText>linguagens</GlowingText>,
              </span>
            }
          >
            <Tools kind="language"></Tools>
          </TitledSection>
          <TitledSection
            level={3}
            title={
              <span>
                e nestas <GlowingText>ferramentas</GlowingText>.
              </span>
            }
          >
            <Tools kind="tool"></Tools>
          </TitledSection>
          <Button href="/projetos">
            <EyeIcon />
            Veja meus outros projetos
          </Button>
        </div>
      </TitledSection>
    </>
  );
}
