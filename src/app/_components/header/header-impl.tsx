"use client";

import { useMediaQuery } from "@mantine/hooks";
import { cva } from "class-variance-authority";
import { HomeIcon, WrenchIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { JSX, memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import ThemeSwitcher from "@components/theme-switcher";

import ColorCycler from "../color-cycler";
import LanguageSwitcher from "../language-switcher";
import SegmentedControl from "../segmented-control";
import { SegmentedControlOption } from "../segmented-control/segmented-control";

const headerCva = cva(
  "fixed left-0 top-0 z-[1] flex w-full flex-row justify-center bg-bg-close/75 px-4 py-2 shadow-sm backdrop-blur-lg transition-all dark:bg-bg-close-dark/75",
  {
    variants: {
      pinned: {
        false: "translate-y-[-100%]",
      },
    },
  },
);

export interface HeaderImplProps {
  isVisible: boolean;
}

const HeaderImpl = memo(function HeaderImpl({
  isVisible,
}: HeaderImplProps): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();

  const isMobile = useMediaQuery("(max-width: 512px)");

  const options = useMemo<SegmentedControlOption[]>(() => {
    const ENTRIES = [
      {
        name: t("sections.home"),
        icon: ({ isActive }: { isActive: boolean }) => (
          <HomeIcon
            fill={isActive ? "currentColor" : "transparent"}
            size={20}
          />
        ),
        href: "/",
      },
      {
        name: t("sections.projects"),
        icon: ({ isActive }: { isActive: boolean }) => (
          <WrenchIcon
            fill={isActive ? "currentColor" : "transparent"}
            size={20}
          />
        ),
        href: "/projetos",
      },
    ];

    return ENTRIES.map((entry) => ({
      label: ({ isActive }) => (
        <>
          {entry.icon({ isActive })} {isMobile ? null : entry.name}
        </>
      ),
      value: entry.href,
    }));
  }, [isMobile, t]);

  return (
    <header className={headerCva({ pinned: isVisible })}>
      <div className="flex max-w-screen-2xl grow flex-row items-center justify-between">
        <nav>
          <SegmentedControl
            value={pathname}
            options={options}
            onChange={(url) => {
              router.push(url);
            }}
          />
        </nav>
        <div className="flex gap-2">
          <ThemeSwitcher />
          <div className="relative">
            <LanguageSwitcher />
            <ColorCycler>
              <div className="pointer-events-none absolute right-0 top-0 -translate-y-1/2 translate-x-1/4 bg-primary px-1 text-fg-on-primary">
                WIP
              </div>
            </ColorCycler>
          </div>
        </div>
      </div>
    </header>
  );
});

export default HeaderImpl;
