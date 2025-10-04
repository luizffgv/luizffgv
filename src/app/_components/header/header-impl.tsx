"use client";

import { useMediaQuery } from "@mantine/hooks";
import { cva } from "class-variance-authority";
import { HomeIcon, WrenchIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { memo, useMemo } from "react";

import ThemeSwitcher from "@components/theme-switcher";

import SegmentedControl from "../segmented-control";

const headerCva = cva(
  "fixed left-0 top-0 z-[1] flex w-full flex-row justify-center bg-bg-close px-4 py-2 shadow-sm backdrop-blur-lg transition-all dark:bg-bg-close-dark",
  {
    variants: {
      pinned: {
        false: "translate-y-[-100%]",
      },
    },
  },
);

const ENTRIES = [
  { name: "Início", icon: <HomeIcon size={20} />, href: "/" },
  { name: "Projetos", icon: <WrenchIcon size={20} />, href: "/projetos" },
];

export interface HeaderImplProps {
  isVisible: boolean;
}

const HeaderImpl = memo(function HeaderImpl({
  isVisible,
}: HeaderImplProps): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  const isMobile = useMediaQuery("(max-width: 512px)");

  const options = useMemo(
    () =>
      ENTRIES.map((entry) => ({
        label: (
          <>
            {entry.icon} {isMobile ? null : entry.name}
          </>
        ),
        value: entry.href,
      })),
    [isMobile],
  );

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
        <ThemeSwitcher />
      </div>
    </header>
  );
});

export default HeaderImpl;
