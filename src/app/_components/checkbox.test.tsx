import Checkbox from "@/app/_components/checkbox";
import { act, render, screen } from "@testing-library/react";

describe("Checkbox", () => {
  it("Displays a label correctly", () => {
    act(() => render(<Checkbox value={"Value"} checked={false}></Checkbox>));

    screen.getByLabelText("Value");
  });

  it("Has the correct value", () => {
    act(() => render(<Checkbox value={"Value"} checked={false}></Checkbox>));

    expect(screen.getByRole("checkbox")).toHaveAttribute("value", "Value");
  });

  it("Is checked according to props", () => {
    act(() =>
      render(
        <>
          <Checkbox value={"Checked"} checked={true}></Checkbox>
          <Checkbox value={"Unchecked"} checked={false}></Checkbox>
        </>,
      ),
    );

    expect(screen.getByLabelText("Checked")).toBeChecked();
    expect(screen.getByLabelText("Unchecked")).not.toBeChecked();
  });

  it("Calls onChange callback when clicked", () => {
    const onChange = jest.fn();

    act(() =>
      render(
        <Checkbox
          value={"Value"}
          checked={false}
          onChange={onChange}
        ></Checkbox>,
      ),
    );

    const checkbox = screen.getByRole("checkbox");

    act(() => {
      for (let i = 0; i < 3; i++) {
        checkbox.click();
      }
    });

    expect(onChange).toHaveBeenCalledTimes(3);
  });
});
