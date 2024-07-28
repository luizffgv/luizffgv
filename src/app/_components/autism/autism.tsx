import { InfinityIcon, SparkleIcon } from "lucide-react";
import GlowingText from "../glowing-text/glowing-text";

export default function Autism(): JSX.Element {
  return (
    <section className="relative text-primary">
      <div
        className="relative"
        aria-label="Símbolo de infinito, representando o autismo"
      >
        <GlowingText>
          <InfinityIcon height={120} width={120} />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rotate-45 gap-24">
            <SparkleIcon className="-rotate-45" />
            <SparkleIcon className="-rotate-45" />
          </div>
        </GlowingText>
      </div>
    </section>
  );
}
