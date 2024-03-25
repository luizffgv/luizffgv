import Button from "./button";
import TitledSection from "./titled-section";
import Tools from "./tools";

export default function NotOnlyReact() {
  return (
    <>
      <TitledSection level={2} title="Mas eu não sei apenas React">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-center">Eu tenho conhecimento em:</p>
            <div className="flex max-w-prose flex-col items-center gap-8">
              <Tools></Tools>
            </div>
          </div>
          <Button href="/projetos">
            <span
              className="material-symbols-outlined"
              aria-hidden
              translate="no"
            >
              visibility
            </span>
            Veja meus outros projetos
          </Button>
        </div>
      </TitledSection>
    </>
  );
}
