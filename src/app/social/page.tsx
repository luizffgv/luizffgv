import { Metadata } from "next";
import MyAge from "../_components/my-age";
import styles from "./page.module.css";

export const metadata: Metadata = {
  robots: "noindex",
};

export default function Home() {
  return (
    <main className="raiar flex-col align-items-center">
      <section
        className={`${styles.card} raiar raiar-card flex-col gap-2x align-items-stretch`}
      >
        <div className="raiar flex-row wrap-reverse justify-content-between gap-2x">
          <div className="raiar flex-col gap">
            <h1 id="header-aboutme">Sobre mim</h1>
            <p>Olá, meu nome é Luiz Fernando.</p>
            <p>
              Eu tenho <MyAge></MyAge> anos e moro em Minas Gerais.
            </p>
          </div>
          <small className={styles.small}>
            Essa página é secreta! Você só pode encontrá-la pelo link
          </small>
        </div>
        <div className="raiar flex-row flex-wrap gap-2x">
          <section className="raiar flex-col gap">
            <h2>Meus hobbies</h2>
            <ul className="raiar-list-text">
              <li>As mídias sociais que mais uso são Reddit e Discord</li>
              <li>Eu adoro escutar música</li>
              <li>Eu passo boa parte do meu tempo livre programando</li>
            </ul>
          </section>
          <section className="raiar flex-col gap">
            <h2>Meus interesses</h2>
            <ul className="raiar-list-text">
              <li>
                Linguagens de programação, seus paradigmas e suas histórias
              </li>
              <li>Mercado de hardware, principalmente CPUs e GPUs</li>
              <li>Autismo e transtornos mentais</li>
              <li>
                Filosofia, principalmente tendências absurdistas&mdash;acredito
                que a natureza do Universo seja inconcebível
              </li>
              <li>Ambientalismo e colapso social</li>
              <li>Filmes com coisas gigantes</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
