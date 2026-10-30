"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

import Card from "../../../card";

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  id?: string;
  title: string;
};

const VIEWPORT = { margin: "-20% 0px -20% 0px" };

export default function Skill({
  children,
  icon,
  id,
  title,
}: Props): JSX.Element {
  return (
    <div id={id} className="max-w-prose scroll-mt-44">
      <Card
        className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-transparent"
        padding={20}
      >
        {icon != null && (
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 size-52 rotate-12 text-primary opacity-15 [mask-image:linear-gradient(to_bottom_left,black,transparent_75%)] [&>svg]:size-full [&>svg]:stroke-[1]"
          >
            {icon}
          </div>
        )}
        <div className="relative w-full">
          <div className="mb-4 flex items-center gap-4 text-primary">
            <motion.div
              className="h-2 shrink-0 bg-primary"
              initial={{ width: 12 }}
              whileInView={{ width: 28 }}
              viewport={VIEWPORT}
            />
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          <div className="[&_li]:relative [&_li]:list-none [&_li]:before:absolute [&_li]:before:-left-5 [&_li]:before:top-[0.6em] [&_li]:before:size-2 [&_li]:before:rotate-45 [&_li]:before:border-[1.5px] [&_li]:before:border-primary [&_li]:before:content-[''] [&_strong]:font-normal [&_strong]:text-primary [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-6">
            {children}
          </div>
        </div>
      </Card>
    </div>
  );
}
