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
      <div className="flex flex-row flex-wrap justify-center gap-4 *:grow">
        <ContactButtons></ContactButtons>
      </div>
    </div>
  );
}
