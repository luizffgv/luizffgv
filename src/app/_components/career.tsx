import { MessageCircleIcon } from "lucide-react";
import Button from "./button";
import ContactButtons from "./contact-buttons";
import GlowingText from "./glowing-text";

export default function Career() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-4">
        <p>Agora chega aqui pertinho...</p>
        <p className="text-center text-2xl">
          Eu estou procurando um <GlowingText>emprego</GlowingText> ou um{" "}
          <GlowingText>estágio</GlowingText>
        </p>
        <p className="text-end">
          Quer ser a minha{" "}
          <strong className="drop-shadow-primary text-primary [filter:drop-shadow(0_0_1em_currentcolor)]">
            primeira
          </strong>{" "}
          oportunidade?
        </p>
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
