import { FrameIcon } from "lucide-react";
import GlowingText from "@components/glowing-text";
import Highlight from "@components/highlight";

export default function DesignSystems(): JSX.Element {
  return (
    <Highlight icon={<FrameIcon />} title="Eu implemento designs à risca">
      <p>
        E adoro <GlowingText>seguir</GlowingText> e{" "}
        <GlowingText>implementar</GlowingText> design systems, com componentes
        ergonômicos, reutilizáveis e type-safe.
      </p>
    </Highlight>
  );
}
