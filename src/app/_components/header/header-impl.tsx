"use client";

import { cva } from "class-variance-authority";
import { HomeIcon, WrenchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

import ThemeSwitcher from "@components/theme-switcher";

const headerCva = cva(
  "fixed left-0 top-0 z-[1] flex w-full flex-row justify-center bg-bg-close px-4 shadow-sm backdrop-blur-lg dark:bg-bg-close-dark transition-all py-2",
  {
    variants: {
      pinned: {
        false: "translate-y-[-100%]",
      },
    },
  },
);

const entryCva = cva(
  "flex flex-row items-center rounded-full button-inset px-2 sm:px-4 py-2 transition-all",
  {
    variants: {
      active: {
        false: "",
        true: "bg-primary dark:bg-primary/5 text-fg-on-primary neon-primary active",
      },
    },
  },
);

const ENTRIES = [
  { name: "Início", icon: <HomeIcon />, href: "/" },
  { name: "Projetos", icon: <WrenchIcon />, href: "/projetos" },
];

export interface HeaderImplProps {
  isVisible: boolean;
}

const HeaderImpl = memo(function HeaderImpl({
  isVisible,
}: HeaderImplProps): JSX.Element {
  const pathname = usePathname();

  return (
    <header className={headerCva({ pinned: isVisible })}>
      <div className="flex max-w-screen-2xl grow flex-row items-stretch justify-between">
        <nav className="flex grow basis-0 flex-row items-center gap-4 font-bold">
          {ENTRIES.map(({ name, icon, href }) =>
            pathname === href ? (
              <div key={name} className={entryCva({ active: true })}>
                <div className="flex gap-2">
                  {icon}
                  <div className="hidden sm:block">{name}</div>
                </div>
              </div>
            ) : (
              <Link
                key={name}
                className={entryCva({ active: false })}
                href={href}
              >
                <span className="flex gap-2">
                  {icon}
                  <div className="hidden sm:block">{name}</div>
                </span>
              </Link>
            ),
          )}
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
});

export default HeaderImpl;
