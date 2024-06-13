import { act, render, screen } from "@testing-library/react";
import TitledSection from "./titled-section";

describe("TitledSection", () => {
  it("Renders the title correctly", () => {
    const name = "Sample Title";

    for (const level of [1, 2, 3, 4, 5, 6] as const) {
      act(() => {
        render(
          <TitledSection title={name} level={level}>
            <></>
          </TitledSection>,
        );
      });

      screen.getByRole("heading", {
        name,
        level,
      });
    }
  });

  it("Renders the children", () => {
    for (const level of [1, 2, 3, 4, 5, 6] as const) {
      act(() => {
        render(
          <TitledSection title="Sample Title" level={level}>
            Sample child
          </TitledSection>,
        );
      });

      screen.getByText("Sample child");

      document.body.innerHTML = "";
    }
  });
});
