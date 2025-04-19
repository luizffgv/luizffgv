import { FolderGit2Icon, PackageIcon } from "lucide-react";
import Link from "next/link";

import Button from "@components/button";
import GlowingText from "@components/glowing-text";
import TitledSection from "@components/titled-section";

export default function MyGitHub(): JSX.Element {
  return (
    <TitledSection
      level={2}
      title={
        <>
          Dê uma olhada em meu{" "}
          <Link href="https://www.github.com/luizffgv" target="_blank">
            <GlowingText>GitHub</GlowingText>
          </Link>
        </>
      }
    >
      <TitledSection
        level={3}
        title="Eu tenho vários projetos open source e alguns pacotes NPM"
      >
        <div className="flex flex-wrap items-center gap-4 *:grow">
          <Button href="https://www.github.com/luizffgv/" target="_blank">
            <FolderGit2Icon />
            Meu GitHub
          </Button>
          <Button href="/projetos?tags=Pacote%20NPM" target="_blank">
            <PackageIcon />
            Meus pacotes NPM
          </Button>
        </div>
      </TitledSection>
    </TitledSection>
  );
}
