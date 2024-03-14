"use client";

import { useState } from "react";
import Modal from "./modal";
import Button from "./button";
import ViewButton from "./buttons/view-button";

export default function MyGitHub() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="raiar-card raiar flex-col gap align-items-center">
      <h2>Meu GitHub</h2>
      Aqui você pode encontrar:
      <ul className="raiar-list-text" style={{ maxWidth: "640px" }}>
        <li>Projetos pessoais em C, C++, Node.js, Lua e outras linguagens.</li>
        <li>Websites open-source estáticos hospedados com GitHub Pages.</li>
        <li>
          Projetos de faculdade realizados na{" "}
          <a href="https://doctum.edu.br" target="_blank">
            Rede de Ensino Doctum
          </a>
          , como a organização{" "}
          <a href="https://github.com/codinstruct" target="_blank">
            codinStruct
          </a>{" "}
          e seu{" "}
          <a href="https://codinstruct.luizf.dev/" target="_blank">
            front-end em Next.js
          </a>
          .
        </li>
        <li>Bots para Discord.</li>
      </ul>
      <div className="raiar flex-row justify-content-center flex-wrap gap">
        <ViewButton href="https://github.com/luizffgv" target="_blank">
          Visualizar
        </ViewButton>
        <ViewButton onClick={() => setModalOpen(true)}>Ver resumo</ViewButton>
      </div>
      {modalOpen ? (
        <Modal onDismiss={() => setModalOpen(false)}>
          <img
            src="https://github.com/luizffgv/luizffgv/raw/main/github-metrics.svg"
            className="width-full"
          ></img>
        </Modal>
      ) : (
        <></>
      )}
    </section>
  );
}
