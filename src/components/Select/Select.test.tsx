// Libs
import { fireEvent, render } from "@testing-library/react";

// Components
import Select from "./index";

//Constants
import { OPTION_SORT } from "@/constants";

describe("Select", () => {
  const onChange = jest.fn();
  const props = {
    options: OPTION_SORT,
    onClick: onChange,
  };

  test("Should match snapshot", async () => {
    const container = render(<Select {...props} />);

    expect(container).toMatchSnapshot();
  });

  it("Should render Select correctly with onChange props", async () => {
    const mock = jest.fn();
    const { getByTestId } = render(<Select {...props} onChange={mock} />);

    const select = getByTestId("select-base");

    fireEvent.change(select, { target: { value: 2 } });

    expect(mock).toHaveBeenCalled();
  });
});
