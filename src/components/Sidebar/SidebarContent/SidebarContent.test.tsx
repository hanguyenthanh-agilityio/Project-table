import { render } from "@testing-library/react";
import { SidebarContent } from ".";

// Components

describe("SidebarContent component", () => {
  const props = {
    onClose: jest.fn(),
  };

  const sidebarContent = () => {
    return render(<SidebarContent {...props} />);
  };

  it("Should render SidebarContent snapshot correctly", () => {
    expect(sidebarContent()).toMatchSnapshot();
  });
});
