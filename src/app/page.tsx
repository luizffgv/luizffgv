import MyAge from "./_components/my-age";
import ProjectsSection from "./_components/projects-section";

export default function Home() {
  return (
    <main className="raiar flex-col gap-4x align-center">
      <div className="raiar flex-row flex-wrap gap-4x align-center justify-content-center">
        <section className="raiar raiar-card flex-col gap card-transparent">
          <h1>Quem sou eu?</h1>
          <p>
            Meu nome é Luiz Fernando Valle, tenho <MyAge></MyAge> anos e moro em
            Raul Soares (MG).
          </p>
          <p>
            Eu atualmente estou me interessando por <strong>Node.js</strong>,
            <strong>TypeScript</strong> e <strong>Next.js</strong>.
          </p>
          <p>Eu tenho autismo (CID-10 F84.9).</p>
        </section>
        <section className="raiar raiar-card flex-col gap card-transparent">
          <h2>Contato</h2>
          <address className="raiar flex-col gap">
            <a className="button" href="mailto:luizfvalle@pm.me">
              <span className="material-symbols-outlined">mail</span>
              E-mail
            </a>
            <a className="button" href="tel:+5533991262949">
              <span className="material-symbols-outlined">call</span>
              WhatsApp
            </a>
          </address>
        </section>
      </div>
      <ProjectsSection></ProjectsSection>
    </main>
  );
}
