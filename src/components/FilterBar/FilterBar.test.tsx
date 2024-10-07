import { fireEvent, render } from "@testing-library/react";

// Components
import FilterBar from ".";

describe("FilterBar component", () => {
  const props = {
    isLoading: false,
    onChangeSearch: jest.fn(),
    onConfirm: jest.fn(),
  };

  const filterBar = () => {
    return render(<FilterBar {...props} />);
  };

  it("Should render FilterBar snapshot", () => {
    expect(filterBar()).toMatchSnapshot();
  });

  it("Should render Input correctly with onChange prop", () => {
    const { getByTestId } = filterBar();
    const clickInput = getByTestId("input-field");

    fireEvent.change(clickInput, { target: { value: "input" } });
    expect(props.onChangeSearch).toHaveBeenCalledTimes(1);
  });
});
