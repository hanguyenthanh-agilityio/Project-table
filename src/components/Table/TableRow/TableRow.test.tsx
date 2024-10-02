import { render } from "@testing-library/react";

// Components
import TableRow from "../TableBody";
import { Table } from "@chakra-ui/react";

// Constants

import { PROJECT_ITEM } from "@/mocks/table";

describe("Select component", () => {
  it("should render TableRow snapshot correctly", () => {
    const Header = render(
      <Table>
        <TableRow projects={[PROJECT_ITEM]} columns={[]} />
      </Table>,
    );
    expect(Header).toMatchSnapshot();
  });
});
