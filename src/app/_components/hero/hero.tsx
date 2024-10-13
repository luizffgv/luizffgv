"use client";

import { FileTextIcon, MessageCircleIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@components/button";
import ContactButtons from "@components/contact-buttons";
import GlowingText from "@components/glowing-text";
import HeroAdvanceButton from "./components/hero-advance-button";
import Link from "next/link";
import Logo from "@components/logo";
import styles from "./hero.module.scss";
import { useRef } from "react";

export default function Hero(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-[200svh]">
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-0 flex min-h-[100svh] flex-col items-center justify-center px-8 pb-16 pt-24"
      >
        <div className="relative flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <Logo></Logo>
            <p className="text-center text-2xl">
              Olá, meu nome é{" "}
              <GlowingText>Luiz Fernando F. G. Valle</GlowingText>
            </p>
            <p className="text-center text-2xl">
              Eu sou um desenvolvedor front-end com foco em{" "}
              <Link href="/projetos?tags=React">
                <GlowingText>React</GlowingText>
              </Link>
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            <Button
              href="https://drive.proton.me/urls/Q84XZHZPB0#UaNx9svTyKL4"
              target="_blank"
            >
              <FileTextIcon />
              Currículo
            </Button>
            <Button
              modalContent={
                <div className="flex flex-col gap-4">
                  <span className="text-center">Me contate aqui</span>
                  <ContactButtons></ContactButtons>
                </div>
              }
            >
              <MessageCircleIcon />
              Vamos conversar
            </Button>
          </div>
        </div>
        <div
          className={`${styles["down-arrow"]} absolute bottom-2 left-1/2 translate-x-[-50%]`}
        >
          <div className="animate-bounce [animation-duration:2s]">
            <HeroAdvanceButton></HeroAdvanceButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
