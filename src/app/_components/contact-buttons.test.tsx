import ContactButtons from "@/app/_components/contact-buttons";
import { act, render } from "@testing-library/react";

describe("ContactButtons", () => {
  it("Uses <address>", () => {
    act(() => render(<ContactButtons />));

    expect(document.querySelector("address")).toBeInTheDocument();
  });
});
