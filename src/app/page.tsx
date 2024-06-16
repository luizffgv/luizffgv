import Autism from "./_components/autism";
import Hero from "./_components/hero";
import MyGitHub from "./_components/my-github";
import NotOnlyReact from "./_components/not-only-react";
import ReactProjects from "./_components/react-projects";
import ToolsSection from "./_components/tools-section";

export default function Home(): JSX.Element {
  return (
    <main>
      <div className="color-in">
        <Hero></Hero>
      </div>
      <div className="flex flex-col items-center gap-64 px-4 pb-[50vh] pt-8 [grid-area:stack]">
        <ToolsSection></ToolsSection>
        <ReactProjects></ReactProjects>
        <NotOnlyReact></NotOnlyReact>
        <div className="appear">
          <MyGitHub></MyGitHub>
        </div>
        <div className="appear">
          <Autism></Autism>
        </div>
      </div>
    </main>
  );
}
