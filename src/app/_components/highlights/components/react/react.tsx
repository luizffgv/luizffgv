import { BlocksIcon } from "lucide-react";
import GlowingText from "@components/glowing-text";
import Highlight from "@components/highlight";

export default function React(): JSX.Element {
  return (
    <Highlight icon={<BlocksIcon />} title="Eu entendo React">
      <p>
        Eu sei como funciona a <GlowingText>renderização</GlowingText>,{" "}
        <GlowingText>reconciliação</GlowingText>, e como o React é implementado
        em <GlowingText>fibers</GlowingText>. Por isso, tenho facilidade em
        encontrar e evitar várias categorias de bugs.
      </p>
      <p>
        Tenho menos familiaridade com o{" "}
        <GlowingText>renderer concorrente</GlowingText>, mas ele não é nada de
        outro mundo.
      </p>
      <p>
        Tenho menos familiaridade com o{" "}
        <GlowingText>renderer concorrente</GlowingText>, mas ele não é nada de
        outro mundo.
      </p>
    </Highlight>
  );
}
