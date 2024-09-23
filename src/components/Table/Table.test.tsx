import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

// Components
import Table from ".";

// Constants
import { HEADER_TABLE } from "@/constants/table";

describe("Table component", () => {
  it("should render Table snapshot correctly", () => {
    const table = render(<Table headerList={HEADER_TABLE} />);
    expect(table).toMatchSnapshot();
  });
});
