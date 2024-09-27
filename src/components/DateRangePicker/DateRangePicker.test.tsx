import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

// Components
import DateRangePicker from ".";

describe("DateRangePicker render", () => {
  const props = {
    label: "From",
    selected: null,
    onChange: jest.fn(),
  };
  const confirm = () => {
    return render(<DateRangePicker {...props} />);
  };

  it("Should render DateRangePicker with snapshot correctly", () => {
    const component = confirm();

    expect(component).toMatchSnapshot();
  });

  it("Should render DateRangePicker correctly with title prop", () => {
    const { getByText } = confirm();

    expect(getByText(props.label)).toBeInTheDocument();
  });
});
