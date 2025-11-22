import { FolderGit2Icon, PackageIcon } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

import Button from "@components/button";
import GlowingText from "@components/glowing-text";
import TitledSection from "@components/titled-section";

import ColorCycler from "../color-cycler";

export default function MyGitHub(): JSX.Element {
  return (
    <ColorCycler offset={180}>
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
    </ColorCycler>
  );
}
