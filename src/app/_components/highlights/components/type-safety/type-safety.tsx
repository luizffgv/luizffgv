import GlowingText from "@components/glowing-text";
import Highlight from "@components/highlight";
import { ShieldIcon } from "lucide-react";

export default function TypeSafety(): JSX.Element {
  return (
    <Highlight icon={<ShieldIcon />} title="Eu sou apaixonado por type-safety">
      <p>
        Eu escrevo <GlowingText>TypeScript</GlowingText>, não JavaScript com
        alguns tipos.
      </p>
      <p>
        <GlowingText>Não</GlowingText> adicionarei nenhum{" "}
        <code>
          <GlowingText>any</GlowingText>
        </code>{" "}
        em sua codebase.
      </p>
    </Highlight>
  );
}
