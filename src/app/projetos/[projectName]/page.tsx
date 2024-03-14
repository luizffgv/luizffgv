import { Metadata } from "next";
import projects, { ProjectRaw } from "projects-list";
import styles from "./page.module.scss";
import Project from "@/app/_components/project";

export function generateStaticParams() {
  return projects.map((project) => ({
    projectName:
      process.env.NODE_ENV == "production"
        ? project.name
        : encodeURIComponent(project.name),
  }));
}

export function generateMetadata({
  params: { projectName },
}: {
  params: { projectName: string };
}): Metadata {
  projectName = decodeURIComponent(projectName);

  const project = projects.find(({ name }) => name == projectName);
  if (project == null)
    throw new TypeError("Couldn't find project with the given name.");

  return {
    title: project.name,
    description: project.description,
  };
}

export default function Page({
  params: { projectName },
}: {
  params: { projectName: string };
}) {
  projectName = decodeURIComponent(projectName);

  const project = projects.find(
    ({ name }) => name == projectName
  ) as ProjectRaw | null;
  if (project == null)
    throw new TypeError("Couldn't find project with the given name.");

  return (
    <main className="raiar flex-col align-items-center">
      <Project project={project}></Project>
    </main>
  );
}
