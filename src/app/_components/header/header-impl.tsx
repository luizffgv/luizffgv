"use client";

import { cva } from "class-variance-authority";
import { HomeIcon, MenuIcon, WrenchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

import Button from "@components/button";
import ThemeSwitcher from "@components/theme-switcher";

import WigglingCube from "./components/wiggling-cube";

const headerCva = cva(
  "fixed left-0 top-0 z-[1] flex w-full flex-row justify-center bg-bg-close px-4 shadow-sm backdrop-blur-lg dark:bg-bg-close-dark transition-all",
  {
    variants: {
      pinned: {
        false: "translate-y-[-100%]",
      },
    },
  },
);

const entryCva = cva("flex flex-row items-center px-4 py-2 border-b-2", {
  variants: {
    active: {
      false: "border-b-transparent",
      true: "border-b-primary text-primary",
    },
  },
});

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
      <div className="flex max-w-screen-2xl grow flex-row items-stretch justify-end sm:justify-between">
        <nav className="hidden flex-row font-bold sm:flex basis-0 grow">
          {ENTRIES.map(({ name, icon, href }) =>
            pathname === href ? (
              <span key={name} className={entryCva({ active: true })}>
                <div className="flex gap-2">
                  {icon}
                  {name}
                </div>
              </span>
            ) : (
              <Link
                key={name}
                className={entryCva({ active: false })}
                href={href}
              >
                <span className="flex gap-2">
                  {icon}
                  {name}
                </span>
              </Link>
            ),
          )}
        </nav>
        <div className="h-16 w-16 hover:[filter:brightness(150%)] [filter:brightness(100%)] transition-all cursor-pointer">
          <WigglingCube />
        </div>
        <div className="flex flex-row gap-4 basis-0 grow justify-end">
          {/* This has to be invisible instead of hidden, otherwise the open modal will disappear when the screen width changes to >sm */}
          {/* This also means that the button must be the first element of the flex container, or there will be gaps when it's hidden */}
          <div className="sm:invisible sm:w-0 py-2">
            <Button
              modalContent={
                <div className="flex flex-col gap-4">
                  <ThemeSwitcher></ThemeSwitcher>
                  {ENTRIES.map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className={
                        pathname === href ? "font-bold text-primary" : ""
                      }
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              }
            >
              <MenuIcon />
              Menu
            </Button>
          </div>
          <div className="hidden py-2 sm:block">
            <ThemeSwitcher></ThemeSwitcher>
          </div>
        </div>
      </div>
    </header>
  );
});

export default HeaderImpl;
