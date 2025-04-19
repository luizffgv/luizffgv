"use client";

import { useHeadroom } from "@mantine/hooks";
import { cva } from "class-variance-authority";
import { HomeIcon, MenuIcon, WrenchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "@components/button";
import ThemeSwitcher from "@components/theme-switcher";

const headerCva = cva(
  "fixed left-0 top-0 z-[1] flex w-full flex-row justify-center bg-bg-close px-4 shadow-sm backdrop-blur-lg transition-all dark:bg-bg-close-dark",
  {
    variants: {
      pinned: {
        false: "translate-y-[-100%]",
      },
    },
  },
);

const entryCva = cva(
  "flex flex-row items-center px-4 py-2 border-b-2 transition-colors",
  {
    variants: {
      active: {
        false: "border-b-transparent",
        true: "border-b-primary",
      },
    },
  },
);

const ENTRIES = [
  { name: "Início", icon: <HomeIcon />, href: "/" },
  { name: "Projetos", icon: <WrenchIcon />, href: "/projetos" },
];

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const pinned = useHeadroom();

  return (
    <header className={headerCva({ pinned })}>
      <div className="flex max-w-screen-2xl grow flex-row items-stretch justify-end sm:justify-between">
        <nav className="hidden flex-row font-bold sm:flex">
          {ENTRIES.map(({ name, icon, href }) => (
            <div key={name} className={entryCva({ active: pathname === href })}>
              {pathname === href ? (
                <span className="text-primary">
                  <div className="flex gap-2">
                    {icon}
                    {name}
                  </div>
                </span>
              ) : (
                <Link href={href}>
                  <span className="flex gap-2">
                    {icon}
                    {name}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex flex-row gap-4">
          {/* This has to be invisible instead of hidden, otherwise the open modal will disappear when the screen width changes to >sm */}
          {/* This also means that the button must be the first element of the flex container, or there will be gaps when it's hidden */}
          <div className="sm:invisible">
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
}
