import { JSX } from "react";

import HardSkills from "./_components/hard-skills";
import Hero from "./_components/hero";
import MyGitHub from "./_components/my-github";
import Trajectory from "./_components/trajectory";

export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <div className="z-10 flex flex-col items-center gap-[480px] px-4 pb-[50vh] pt-64 transition-colors [grid-area:stack]">
        <div className="flex flex-wrap-reverse justify-center gap-x-64 gap-y-[480px]">
          <HardSkills></HardSkills>
          <Trajectory></Trajectory>
        </div>
        <MyGitHub></MyGitHub>
      </div>
    </main>
  );
}
