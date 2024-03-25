import { render, screen } from "@testing-library/react";
import Card from "./card";

describe("Card", () => {
  it("Renders children", () => {
    render(<Card>Test Content</Card>);

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
