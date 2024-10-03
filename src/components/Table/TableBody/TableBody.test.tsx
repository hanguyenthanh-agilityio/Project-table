import { render } from "@testing-library/react";

// Components

import { Table } from "@chakra-ui/react";

// Constants

import { PROJECT_LIST } from "@/mocks/table";

import TableBody from ".";
import { HEADER_TABLE } from "@/constants";

describe("Select component", () => {
  it("should render TableBody snapshot correctly", () => {
    const Header = render(
      <Table>
        <TableBody projects={PROJECT_LIST} columns={HEADER_TABLE} />
      </Table>,
    );
    expect(Header).toMatchSnapshot();
  });
});
