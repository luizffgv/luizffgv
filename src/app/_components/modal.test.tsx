import { act, render, screen } from "@testing-library/react";
import Modal from "@/app/_components/modal";

describe("Modal", () => {
  it("Opens on first render", () => {
    act(() => {
      render(<Modal>Content</Modal>);
    });

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("open");
  });

  it("Displays contents", () => {
    act(() => {
      render(<Modal>Content</Modal>);
    });

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Content");
  });

  it("Calls onDismiss when close button is clicked", () => {
    const onDismiss = jest.fn();

    act(() => {
      render(<Modal onDismiss={onDismiss}>Content</Modal>);
    });

    const closeButton = screen.getByRole("button");
    act(() => {
      closeButton.click();
    });

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
