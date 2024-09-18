// Libs
import { fireEvent, render } from "@testing-library/react";

// Components
import Button from "./index";

describe("Button", () => {
  const onClick = jest.fn();
  const props = {
    label: "Click Me",
    onClick: onClick,
  };

  test("Should match snapshot", async () => {
    const container = render(<Button {...props} />);

    expect(container).toMatchSnapshot();
  });

  it("Calls onClick callback when clicked", () => {
    const { getByText } = render(<Button {...props} />);
    fireEvent.click(getByText("Click Me"));

    expect(onClick).toHaveBeenCalled();
  });
});
