import Button from "./button";
import ContactButtons from "./contact-buttons";

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
      <Button
        modalContent={
          <div>
            <div className="flex flex-row flex-wrap gap-4">
              <ContactButtons></ContactButtons>
            </div>
          </div>
        }
      >
        <span className="material-symbols-outlined" aria-hidden translate="no">
          chat
        </span>
        Vamos conversar
      </Button>
    </div>
  );
}
