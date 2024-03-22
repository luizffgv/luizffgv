import Button from "./button";
import Tools from "./tools";

export default function NotOnlyReact() {
  return (
    <>
      <div className="flex max-w-prose flex-col items-center gap-8">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-2xl">Mas eu não sei apenas React</p>
          <p>Eu tenho conhecimento em:</p>
        </div>
        <Tools></Tools>
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
    </>
  );
}
