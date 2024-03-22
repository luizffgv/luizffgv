import Button from "./button";

export default function Career() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-4">
        <p>Agora chega aqui pertinho...</p>
        <p className="text-center text-2xl">
          Eu estou procurando um{" "}
          <strong className="text-primary">emprego</strong> ou um{" "}
          <strong className="text-primary">estágio</strong>
        </p>
        <p className="text-end">
          Quer ser a minha{" "}
          <strong className="drop-shadow-primary text-primary [filter:drop-shadow(0_0_1em_currentcolor)]">
            primeira
          </strong>{" "}
          oportunidade?
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 *:grow">
        <div>
          <Button href="https://www.linkedin.com/in/luizffgv/" target="_blank">
            <span
              className="material-symbols-outlined"
              aria-hidden
              translate="no"
            >
              work
            </span>{" "}
            LinkedIn
          </Button>
        </div>
        <address className="contents not-italic *:grow">
          <div>
            <Button href="tel:+5533991262949" target="_blank">
              <span
                className="material-symbols-outlined"
                aria-hidden
                translate="no"
              >
                phone
              </span>{" "}
              +55 (33) 99126-2949
            </Button>
          </div>
          <div>
            <Button href="mailto:luizffgv10@gmail.com" target="_blank">
              <span
                className="material-symbols-outlined"
                aria-hidden
                translate="no"
              >
                mail
              </span>{" "}
              E-mail
            </Button>
          </div>
        </address>
      </div>
    </div>
  );
}
