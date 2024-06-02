"use client";

import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import Button from "./button";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { MenuIcon } from "lucide-react";

const ENTRIES = [
  { name: "Início", href: "/" },
  { name: "Projetos", href: "/projetos" },
];

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastPosition = scrollY;

    const scrollListener = () => {
      const scrollPosition = scrollY;
      if (scrollPosition > lastPosition && scrollY !== 0) {
        headerRef.current?.classList.add("translate-y-[-100%]");
      } else {
        headerRef.current?.classList.remove("translate-y-[-100%]");
      }
      lastPosition = scrollPosition;
    };

    addEventListener("scroll", scrollListener);

    return () => {
      document.body.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <header
      ref={headerRef}
      className="fixed left-0 top-0 z-[1] flex w-full flex-row justify-end bg-bg-close px-4 py-2 shadow-sm transition-all dark:bg-bg-close-dark"
    >
      <div className="flex grow flex-row items-center justify-end sm:justify-between">
        <nav className="hidden flex-row gap-8 font-bold sm:flex">
          {ENTRIES.map(({ name, href }) =>
            pathname === href ? (
              <span key={name} className="text-primary">
                {name}
              </span>
            ) : (
              <Link key={name} href={href}>
                {name}
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
                  <div className="sm:hidden">
                    <ThemeSwitcher></ThemeSwitcher>
                  </div>
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
