"use client";

import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import Button from "./button";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

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
      if (scrollPosition > lastPosition && scrollY != 0) {
        headerRef.current?.classList.add("translate-y-[-100%]");
      } else {
        headerRef.current?.classList.remove("translate-y-[-100%]");
      }
      lastPosition = scrollPosition;
    };

    addEventListener("scroll", scrollListener);

    return () => document.body.removeEventListener("scroll", scrollListener);
  });

  return (
    <header
      ref={headerRef}
      className="dark:bg-bg-close-dark fixed left-0 top-0 z-[1] flex w-full flex-row justify-end bg-bg-close px-4 py-2 shadow-sm transition-all"
    >
      <div className="flex grow flex-row items-center justify-end sm:justify-between">
        <nav className="hidden flex-row gap-8 sm:flex">
          {ENTRIES.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={pathname === href ? "font-bold text-primary" : ""}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div>
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
            <span
              className="material-symbols-outlined"
              aria-hidden
              translate="no"
            >
              menu
            </span>
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
