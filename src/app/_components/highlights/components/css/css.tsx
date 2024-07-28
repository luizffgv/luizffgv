import GlowingText from "@components/glowing-text";
import Highlight from "@components/highlight";
import { PaintbrushIcon } from "lucide-react";

export default function Css(): JSX.Element {
  return (
    <Highlight
      icon={<PaintbrushIcon />}
      title="Sei estilizar de todas as formas"
    >
      <p>
        Tenho projetos utilizando <GlowingText>styled-components</GlowingText>,{" "}
        <GlowingText>Tailwind CSS</GlowingText>,{" "}
        <GlowingText>Class Variance Authority</GlowingText>,{" "}
        <GlowingText>Sass</GlowingText> e{" "}
        <GlowingText> CSS Modules</GlowingText>.
      </p>
    </Highlight>
  );
}
