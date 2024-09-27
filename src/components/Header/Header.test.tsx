import { render } from "@testing-library/react";
import Header from ".";

describe("Header component", () => {
  const props = {
    title: "Project",
  };

  const component = () => {
    return render(<Header {...props} />);
  };
  it("Should render Header snapshot correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render Header correctly with title prop", () => {
    const { getByRole } = component();

    expect(getByRole("heading", { name: props.title })).toBeInTheDocument();
  });
});
