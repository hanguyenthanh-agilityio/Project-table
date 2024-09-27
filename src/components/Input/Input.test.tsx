import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from ".";

describe("Input component", () => {
  const props = {
    placeholder: "Search",
    onChange: jest.fn(),
    onKeyDown: jest.fn(),
  };

  const input = () => {
    return render(<Input {...props} />);
  };

  it("Should render Input snapshot correctly", () => {
    expect(input()).toMatchSnapshot();
  });

  it("Should render Input correctly with placeholder prop", () => {
    const { getByPlaceholderText } = input();

    expect(getByPlaceholderText(props.placeholder));
  });

  it("Should render Input correctly with onChange prop", () => {
    const { getByTestId } = input();
    const clickInput = getByTestId("input-field");

    fireEvent.change(clickInput, { target: { value: "input" } });
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
