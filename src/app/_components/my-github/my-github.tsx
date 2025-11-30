"use client";

import { FolderGit2Icon, PackageIcon } from "lucide-react";
import Link from "next/link";
import { JSX, PropsWithChildren, createElement } from "react";
import { Trans, useTranslation } from "react-i18next";

import Button from "@components/button";
import GlowingText from "@components/glowing-text";
import TitledSection from "@components/titled-section";

import ColorCycler from "../color-cycler";

export default function MyGitHub(): JSX.Element {
  const { t } = useTranslation();

  return (
    <ColorCycler offset={180}>
      <TitledSection
        level={2}
        title={
          <Trans
            components={{
              Link: createElement(({ children }: PropsWithChildren) => (
                <Link href="https://www.github.com/luizffgv" target="_blank">
                  <GlowingText>{children}</GlowingText>
                </Link>
              )),
            }}
            i18nKey="my-github.title"
            t={t}
          />
        }
      >
        <TitledSection level={3} title={t("my-github.subtitle")}>
          <div className="flex flex-wrap items-center gap-4 *:grow">
            <Button href="https://www.github.com/luizffgv/" target="_blank">
              <FolderGit2Icon />
              {t("my-github.links.my-github")}
            </Button>
            <Button href="/projetos?tags=Pacote%20NPM" target="_blank">
              <PackageIcon />
              {t("my-github.links.my-npm-packages")}
            </Button>
          </div>
        </TitledSection>
      </TitledSection>
    </ColorCycler>
  );
}
