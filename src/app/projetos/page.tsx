import { Metadata } from "next";
import ProjectsSection from "../_components/projects-section";

export const metadata: Metadata = {
  title: "Meus projetos",
  description: "Veja meus projetos aqui.",
};

export default function Page() {
  return (
    <main className="p-4 pt-32">
      <ProjectsSection></ProjectsSection>
    </main>
  );
}
