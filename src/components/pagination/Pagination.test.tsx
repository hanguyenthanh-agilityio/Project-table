import { render } from "@testing-library/react";

// Components
import Pagination from ".";

describe("Pagination component", () => {
  const props = {
    projects: [],
    onClickPrevious: jest.fn(),
    onClickNext: jest.fn(),
    disable: true,
    totalPages: 45 / 10,
    startIndex: 1,
    endIndex: 10,
    totalItem: 45,
  };

  const pagination = () => {
    return render(<Pagination {...props} />);
  };

  it("Should render Pagination snapshot correctly", () => {
    expect(pagination()).toMatchSnapshot();
  });
});
