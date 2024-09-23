import { render } from "@testing-library/react";

// Data

import Pagination from ".";

// Components

describe("Pagination component", () => {
  const props = {
    projects: [],
    onClickPrevious: jest.fn(),
    onClickNext: jest.fn(),
    disable: true,
  };

  const pagination = () => {
    return render(<Pagination {...props} />);
  };

  it("Should render Pagination snapshot correctly", () => {
    expect(pagination()).toMatchSnapshot();
  });
});
