import { fireEvent, render } from "@testing-library/react";

// Components
import FilterBar from ".";

describe("FilterBar component", () => {
  const props = {
    isLoading: false,
    isOpen: true,
    onClickAdd: jest.fn(),
    onClose: jest.fn(),
    onChangeSearch: jest.fn(),
    onConfirm: jest.fn(),
  };

  const filterBar = () => {
    return render(<FilterBar {...props} />);
  };

  it("Should render FilterBar correctly with onChange prop", () => {
    expect(filterBar()).toMatchSnapshot();
  });

  it("Calls onClickAdd when the button is clicked", () => {
    const { getByText } = filterBar();

    const button = getByText("New project");
    fireEvent.click(button);

    expect(props.onClickAdd).toHaveBeenCalledTimes(1);
  });

  it("Should render Input correctly with onChange prop", () => {
    const { getByText } = filterBar();

    const button = getByText("New project");
    fireEvent.click(button);

    expect(props.onClickAdd).toHaveBeenCalledTimes(2);
  });

  it("Should render Input correctly with onChange prop", () => {
    const { getByTestId } = filterBar();
    const clickInput = getByTestId("input-field");

    fireEvent.change(clickInput, { target: { value: "input" } });
    expect(props.onChangeSearch).toHaveBeenCalledTimes(1);
  });
});
