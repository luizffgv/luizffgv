import GlowingText from "@components/glowing-text";
import Highlight from "@components/highlight";
import { SquareStackIcon } from "lucide-react";

export default function Css(): JSX.Element {
  return (
    <Highlight
      icon={<SquareStackIcon />}
      title="Familiar com arquitetura de microfrontends"
    >
      <p>
        Tenho familiaridade para trabalhar em websites baseados em
        microfrontends com <GlowingText>single-spa</GlowingText>.
      </p>
    </Highlight>
  );
}
