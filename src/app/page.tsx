import Autism from "./_components/autism";
import Career from "./_components/career";
import Hero from "./_components/hero";
import MyGitHub from "./_components/my-github";
import NotOnlyReact from "./_components/not-only-react";
import ReactProjects from "./_components/react-projects";

export default function Home() {
  return (
    <main>
      <div className="color-in">
        <Hero></Hero>
      </div>
      <div className="grid bg-bg-close transition-colors [grid-template-areas:'stack'] dark:bg-bg-close-dark">
        {/* Gradient background */}
        <div className="pointer-events-none sticky top-0 h-screen max-h-full w-full [background:radial-gradient(circle_at_bottom,_theme(colors.primary/20%),_transparent)] [grid-area:stack] dark:[background:radial-gradient(circle_at_top,_theme(colors.primary/15%),_transparent)]"></div>

        <div className="flex flex-col items-center gap-64 px-4 pb-[50vh] pt-8 [grid-area:stack]">
          <ReactProjects></ReactProjects>
          <div className="appear">
            <NotOnlyReact></NotOnlyReact>
          </div>
          <div className="appear">
            <MyGitHub></MyGitHub>
          </div>
          <div className="appear">
            <Autism></Autism>
          </div>
          <div className="appear">
            <Career></Career>
          </div>
        </div>
      </div>
    </main>
  );
}
