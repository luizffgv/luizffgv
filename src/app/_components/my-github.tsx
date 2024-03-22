import Button from "./button";

export default function MyGitHub() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-2xl">
        Dê uma olhada em meu <strong className="text-primary">GitHub</strong>{" "}
      </p>
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
  );
}
