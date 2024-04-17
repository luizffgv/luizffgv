import { FolderGit2Icon, PackageIcon } from "lucide-react";
import Button from "./button";
import GlowingText from "./glowing-text";
import TitledSection from "./titled-section";

export default function MyGitHub() {
  return (
    <TitledSection
      level={2}
      title={
        <>
          Dê uma olhada em meu <GlowingText>GitHub</GlowingText>
        </>
      }
    >
      <div className="flex flex-row flex-wrap justify-center gap-8">
        <TitledSection level={3} title="Eu tenho vários projetos open source">
          <div className="flex flex-col items-center">
            <Button href="https://www.github.com/luizffgv/" target="_blank">
              <FolderGit2Icon />
              Ver meu GitHub
            </Button>
          </div>
        </TitledSection>
        <TitledSection level={3} title="e alguns pacotes NPM.">
          <div className="flex flex-col items-center">
            <Button href="/projetos?tags=Pacote%20NPM" target="_blank">
              <PackageIcon />
              Ver meus pacotes
            </Button>
          </div>
        </TitledSection>
      </div>
    </TitledSection>
  );
}
