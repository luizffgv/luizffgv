import { act, render, screen } from "@testing-library/react";
import GlowingText from "@/app/_components/glowing-text";

describe("GlowingText", () => {
  it("Renders provided children", () => {
    act(() => render(<GlowingText>Text</GlowingText>));

    expect(screen.getByText("Text"));
  });
});
