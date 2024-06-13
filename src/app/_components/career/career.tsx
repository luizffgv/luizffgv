import { HeartIcon, MessageCircleIcon } from "lucide-react";
import Button from "@components/button";
import ContactButtons from "@components/contact-buttons";
import GlowingText from "@components/glowing-text";

export default function Career(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-4">
        <p>Agora chega aqui pertinho...</p>
        <p
          className="text-center text-2xl"
          aria-label="Eu adoraria um emprego ou um estágio"
        >
          Eu ad
          <HeartIcon
            className="inline animate-pulse [fill:currentcolor]"
            width={16}
            height={16}
          />
          raria um <GlowingText>emprego</GlowingText> ou um{" "}
          <GlowingText>estágio</GlowingText>.
        </p>
        <p className="text-end">Que tal me garantir enquanto pode?</p>
      </div>
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
  );
}
