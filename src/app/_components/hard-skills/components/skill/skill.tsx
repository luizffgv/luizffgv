"use client";

import { JSX } from "react";

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  id?: string;
  title: string;
};

export default function Skill({
  children,
  icon,
  id,
  title,
}: Props): JSX.Element {
  return (
    <div
      id={id}
      className="max-w-prose scroll-mt-44 border-t border-hr pt-6 transition-colors dark:border-hr-dark"
    >
      <h3 className="mb-4 flex items-center gap-2 text-balance text-2xl font-bold tracking-tight text-primary">
        {icon}
        {title}
      </h3>
      <div className="[&_li]:relative [&_li]:list-none [&_li]:before:absolute [&_li]:before:-left-5 [&_li]:before:top-[0.6em] [&_li]:before:size-2 [&_li]:before:rotate-45 [&_li]:before:border-[1.5px] [&_li]:before:border-fg-weak [&_li]:before:content-[''] [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-6">
        {children}
      </div>
    </div>
  );
}
