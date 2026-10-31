import { Metadata } from "next";
import { JSX } from "react";

import ptBr from "@/public/i18n/pt-BR/common.json";

import ProjectsSection from "./_components/projects-section";

export const metadata: Metadata = {
  title: ptBr.meta.projects.title,
  description: ptBr.meta.projects.description,
  alternates: {
    canonical: "/projetos",
  },
};

export default function Page(): JSX.Element {
  return (
    <main className="p-4 pt-24">
      <ProjectsSection></ProjectsSection>
    </main>
  );
}
