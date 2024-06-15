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
      <div className="grid bg-bg-close transition-colors [grid-template-areas:'stack'] dark:bg-bg-close-dark">
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
        {/* Gradient background */}
        <div className="pointer-events-none sticky top-0 h-screen max-h-full w-full [grid-area:stack] [background:radial-gradient(circle_at_bottom,_theme(colors.primary/20%),_transparent)] dark:[background:radial-gradient(circle_at_top,_theme(colors.primary/10%),_transparent)]"></div>
      </div>
    </main>
  );
}
