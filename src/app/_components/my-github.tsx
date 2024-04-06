import { FolderGit2Icon } from "lucide-react";
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
      <div className="flex flex-col items-center gap-4">
        <p>Eu tenho vários projetos open source!</p>
        <div>
          <Button href="https://www.github.com/luizffgv/" target="_blank">
            <FolderGit2Icon />
            Ver meu GitHub
          </Button>
        </div>
      </div>
    </TitledSection>
  );
}
