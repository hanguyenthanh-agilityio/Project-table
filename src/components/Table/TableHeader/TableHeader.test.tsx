import { render } from "@testing-library/react";

// Components
import TableHeader from "..";
import { Table } from "@chakra-ui/react";

// Constants
import { HEADER_TABLE } from "@/constants/table";
import { PROJECT_LIST } from "@/mocks/table";

describe("Select component", () => {
  it("should render TableHeader snapshot correctly", () => {
    const Header = render(
      <Table>
        <TableHeader
          headerList={HEADER_TABLE}
          projects={PROJECT_LIST}
          isLoading={false}
        />
      </Table>,
    );
    expect(Header).toMatchSnapshot();
  });
});
