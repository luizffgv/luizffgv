import { Metadata } from "next";
import ProjectsSection from "../_components/projects-section";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Meus projetos",
  description: "Veja meus projetos aqui.",
};

export default function Page() {
  return (
    <main className="raiar flex-col align-items-center gap-4x">
      <h1>Projetos</h1>
      <ProjectsSection></ProjectsSection>
    </main>
  );
}
