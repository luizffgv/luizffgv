import Button from "./button";
import TitledSection from "./titled-section";

export default function MyGitHub() {
  return (
    <TitledSection
      level={2}
      title={
        <>
          Dê uma olhada em meu <strong className="text-primary">GitHub</strong>
        </>
      }
    >
      <div className="flex flex-col items-center gap-4">
        <p>Eu tenho vários projetos open source!</p>
        <div>
          <Button href="https://www.github.com/luizffgv/" target="_blank">
            <span
              className="material-symbols-outlined"
              aria-hidden
              translate="no"
            >
              folder_data
            </span>{" "}
            Ver meu GitHub
          </Button>
        </div>
      </div>
    </TitledSection>
  );
}
