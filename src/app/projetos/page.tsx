import { Metadata } from "next";
import ProjectsSection from "../_components/projects-section";

export const metadata: Metadata = {
  title: "Meus projetos",
  description: "Veja meus projetos aqui.",
};

export default function Page(): JSX.Element {
  return (
    <main className="p-4 pt-24">
      <ProjectsSection></ProjectsSection>
    </main>
  );
}
