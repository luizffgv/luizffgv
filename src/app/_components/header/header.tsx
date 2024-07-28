"use client";

import { HomeIcon, MenuIcon, WrenchIcon } from "lucide-react";
import Button from "@components/button";
import Link from "next/link";
import ThemeSwitcher from "@components/theme-switcher";
import { cva } from "class-variance-authority";
import { useHeadroom } from "@mantine/hooks";
import { usePathname } from "next/navigation";

const headerCva = cva(
  "fixed left-0 top-0 z-[1] flex w-full flex-row justify-end bg-bg-closer px-4 py-2 shadow-sm backdrop-blur-lg transition-all dark:bg-bg-closer-dark",
  {
    variants: {
      pinned: {
        false: "translate-y-[-100%]",
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
      <div className="flex grow flex-row items-center justify-end sm:justify-between">
        <nav className="hidden flex-row gap-8 font-bold sm:flex">
          {ENTRIES.map(({ name, icon, href }) =>
            pathname === href ? (
              <span key={name} className="text-primary">
                <div className="flex gap-2">
                  {icon}
                  {name}
                </div>
              </span>
            ) : (
              <Link key={name} href={href}>
                <span className="flex gap-2">
                  {icon}
                  {name}
                </span>
              </Link>
            ),
          )}
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
          <div className="hidden sm:block">
            <ThemeSwitcher></ThemeSwitcher>
          </div>
        </div>
      </div>
    </header>
  );
}
