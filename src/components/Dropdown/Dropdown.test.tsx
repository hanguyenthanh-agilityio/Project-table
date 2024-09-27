import { fireEvent, render } from "@testing-library/react";
import Dropdown from ".";

const option = [
  {
    name: "Edit",
    action: jest.fn(),
  },
  {
    name: "Delete",
    action: jest.fn(),
  },
];

describe("Dropdown component", () => {
  it("Should render Dropdown snapshot correctly", () => {
    const component = render(<Dropdown dropdownItems={option} />);

    expect(component).toMatchSnapshot();
  });

  it("should display dropdown when the button is clicked", () => {
    const { getByRole, getByText } = render(
      <Dropdown dropdownItems={option} />,
    );

    // Click the button to open the menu
    fireEvent.click(getByRole("button"));

    // Check if dropdown items are displayed
    option.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
    });
  });
});
