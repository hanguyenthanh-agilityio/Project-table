import { render } from "@testing-library/react";

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

  it("Should render FilterBar snapshot correctly", () => {
    expect(filterBar()).toMatchSnapshot();
  });
});
