import {
  FolderGit2Icon,
  GitPullRequestArrowIcon,
  PackageIcon,
} from "lucide-react";
import Button from "@components/button";
import GlowingText from "@components/glowing-text";
import Link from "next/link";
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
      <div className="relative isolate flex flex-col flex-wrap justify-center gap-8">
        <div className="absolute left-1/2 top-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 rotate-45 sm:block">
          <GlowingText>
            <div className="-rotate-45">
              <GitPullRequestArrowIcon className="h-48 w-48 rotate-12 text-primary opacity-5 md:h-64 md:w-64" />
            </div>
            <div className="-rotate-45">
              <PackageIcon className="h-48 w-48 -rotate-12 text-primary opacity-5 md:h-64 md:w-64" />
            </div>
          </GlowingText>
        </div>
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
      </div>
    </TitledSection>
  );
}
