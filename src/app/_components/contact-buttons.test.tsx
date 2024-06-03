import { act, render } from "@testing-library/react";
import ContactButtons from "@/app/_components/contact-buttons";

describe("ContactButtons", () => {
  it("Uses <address>", () => {
    act(() => render(<ContactButtons />));

    expect(document.querySelector("address")).toBeInTheDocument();
  });
});
