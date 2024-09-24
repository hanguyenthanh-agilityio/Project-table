import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

// Components
import Table from ".";

// Constants
import { HEADER_TABLE } from "@/constants/table";
import { PROJECT_LIST } from "@/mocks/table";

describe("Table component", () => {
  it("should render Table snapshot correctly", () => {
    const table = render(
      <Table headerList={HEADER_TABLE} projects={PROJECT_LIST} />,
    );
    expect(table).toMatchSnapshot();
  });
});
