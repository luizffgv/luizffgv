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
      <div className="dark:bg-bg-close-dark flex flex-col items-center gap-64 bg-bg-close px-4 pb-[50vh] pt-8 transition-colors">
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
    </main>
  );
}
