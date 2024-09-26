// Libs
import { fireEvent, render } from "@testing-library/react";

// Components
import Select from "./index";

//Constants
import { OPTION_SORT } from "@/constants";

describe("Select", () => {
  const props = {
    options: OPTION_SORT,
    onChange: jest.fn(),
    value: "edit",
  };

  const mock = jest.fn();

  const component = () => {
    return render(<Select {...props} onChange={mock} />);
  };

  it("Should match snapshot", async () => {
    const container = component();

    expect(container).toMatchSnapshot();
  });

  it("Should render Select correctly with onChange props", async () => {
    const { getByTestId } = component();

    const select = getByTestId("select-base");

    fireEvent.change(select, { target: { value: 2 } });

    expect(mock).toHaveBeenCalled();
  });

  it("Should render Select with correct value", async () => {
    const { getByDisplayValue } = component();

    const selectOption = getByDisplayValue("Edit");

    expect(selectOption).toBeInTheDocument();
  });
});
