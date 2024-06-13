import { act, render, screen } from "@testing-library/react";
import Button from "@components/button";

describe("Button", () => {
  it("Fires onClick when clicked", () => {
    const onClick = jest.fn();

    act(() => {
      render(<Button onClick={onClick}>Press me</Button>);
    });

    act(() => {
      for (let click = 0; click < 3; click++) {
        screen.getByRole("button").click();
      }
    });

    expect(onClick).toHaveBeenCalledTimes(3);
  });

  it("Displays text", () => {
    act(() => render(<Button onClick={() => {}}>Press me</Button>));

    expect(screen.getByRole("button")).toHaveTextContent("Press me");
  });

  it("Opens a dialog when clicked", () => {
    act(() => {
      render(<Button modalContent="Dialog content">Press me</Button>);
    });

    act(() => {
      screen.getByRole("button").click();
    });

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("open");
    expect(dialog).toHaveTextContent("Dialog content");
  });

  it("Works as an anchor", () => {
    act(() => {
      render(
        <Button href="https://example.com" target="_blank">
          Press me
        </Button>,
      );
    });

    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Press me");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("href", "https://example.com");
  });
});
