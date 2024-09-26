import { render } from "@testing-library/react";
import Sidebar from ".";

// Components

describe("Sidebar component", () => {
  const props = {
    children: <>Sidebar</>,
  };

  const sidebar = () => {
    return render(<Sidebar {...props} />);
  };

  it("Should render SidebarContent snapshot correctly", () => {
    expect(sidebar()).toMatchSnapshot();
  });
});
