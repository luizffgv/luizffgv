import Autism from "./_components/autism";
import Hero from "./_components/hero";
import Highlights from "./_components/highlights/highlights";
import MyGitHub from "./_components/my-github";
import NotOnlyReact from "./_components/not-only-react";
import ReactProjects from "./_components/react-projects";
import ToolsSection from "./_components/tools-section";

export default function Home(): JSX.Element {
  return (
    <main>
      <Hero></Hero>
      <div className="flex flex-col items-center gap-[480px] bg-bg-close px-4 pb-[50vh] pt-64 [grid-area:stack] dark:bg-bg-close-dark">
        <Highlights></Highlights>
        <ToolsSection></ToolsSection>
        <ReactProjects></ReactProjects>
        <NotOnlyReact></NotOnlyReact>
        <MyGitHub></MyGitHub>
        <Autism></Autism>
      </div>
    </main>
  );
}
