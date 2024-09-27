import { render } from "@testing-library/react";

// Components

import { Table } from "@chakra-ui/react";

// Constants

import { PROJECT_LIST } from "@/mocks/table";

import TableBody from ".";

describe("Select component", () => {
  it("should render TableBody snapshot correctly", () => {
    const Header = render(
      <Table>
        <TableBody projects={PROJECT_LIST} />
      </Table>,
    );
    expect(Header).toMatchSnapshot();
  });
});
