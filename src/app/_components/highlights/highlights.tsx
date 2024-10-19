import Css from "./components/css";
import DesignSystems from "./components/design-systems";
import Microfrontends from "./components/microfrontends";
import React from "./components/react";
import TypeSafety from "./components/type-safety";

export default function Highlights(): JSX.Element {
  return (
    <div className="flex max-w-screen-2xl flex-col gap-96">
      <React></React>
      <DesignSystems></DesignSystems>
      <TypeSafety></TypeSafety>
      <Css></Css>
      <Microfrontends></Microfrontends>
    </div>
  );
}
