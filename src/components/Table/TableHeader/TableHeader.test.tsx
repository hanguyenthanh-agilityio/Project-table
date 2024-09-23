import { render } from "@testing-library/react";

// Components
import TableHeader from "..";
import { Table } from "@chakra-ui/react";

// Constants
import { HEADER_TABLE } from "@/constants/table";

describe("Select component", () => {
  it("should render TableHeader snapshot correctly", () => {
    const Header = render(
      <Table>
        <TableHeader headerList={HEADER_TABLE} />
      </Table>,
    );
    expect(Header).toMatchSnapshot();
  });
});
