import Link from "next/link";

import GlowingText from "../_components/glowing-text";
import TitledSection from "../_components/titled-section";

export default function About(): JSX.Element {
  return (
    <main>
      <div className="flex flex-col items-center gap-[480px] bg-bg px-4 pb-[50vh] pt-64 transition-colors [grid-area:stack] dark:bg-bg-dark">
        <TitledSection title="Sobre mim" level={1}>
          <TitledSection title="Meus interesses" level={2}>
            <TitledSection title="Filosofia" level={3}>
              Eu adoro filosofia, principalmente os conceitos de{" "}
              <strong>qualia</strong> e <strong>epifenomenalismo</strong>.
            </TitledSection>
            <TitledSection title="Poesia" level={3}>
              Poesia é uma das minhas formas de expressão que mais aprecio. Um
              de meus poemas favoritos é{" "}
              <Link href="https://www.poetryfoundation.org/poems/44263/fire-and-ice">
                <GlowingText>Fire and Ice</GlowingText>
              </Link>{" "}
              de Robert Frost.
            </TitledSection>
            <TitledSection title="Topologia" level={3}>
              Não estudei topologia especificamente, mas adoro como topologia
              pode ser tão concreta quanto abstrata, desde a topologia de uma
              camisa até a de uma variedade.
            </TitledSection>
          </TitledSection>
        </TitledSection>
      </div>
    </main>
  );
}
