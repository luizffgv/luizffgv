import { FileTextIcon, MessageCircleIcon } from "lucide-react";
import Button from "./button";
import ContactButtons from "./contact-buttons";
import GlowingText from "./glowing-text";
import Goo from "./goo";
import HeroAdvanceButton from "./hero-advance-button";
import Link from "next/link";
import Logo from "./logo";
import LookingAtCursor from "./looking-at-cursor";
import styles from "./hero.module.scss";

export default function Hero(): JSX.Element {
  return (
    <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-8 pb-16 pt-24">
      <div className="z-[-1] text-primary opacity-50">
        <Goo></Goo>
      </div>
      <div className="appear relative flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <LookingAtCursor>
            <Logo></Logo>
          </LookingAtCursor>
          <p className="text-center text-2xl">
            Olá, meu nome é <GlowingText>Luiz Fernando F. G. Valle</GlowingText>
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
            href="https://drive.google.com/file/d/1ClghZuG9vrQdk8YTqev6jNpy_OOU6i_w/view?usp=sharing"
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
        <div className="animate-bounce">
          <HeroAdvanceButton></HeroAdvanceButton>
        </div>
      </div>
    </div>
  );
}
