import { render } from "@testing-library/react";

// Components
import TableHeader from "..";
import { Table } from "@chakra-ui/react";

// Constants
import { HEADER_TABLE } from "@/constants/table";
import { QueryClient, QueryClientProvider } from "react-query";

describe("Select component", () => {
  it("should render TableHeader snapshot correctly", () => {
    const queryClient = new QueryClient();

    const Header = render(
      <QueryClientProvider client={queryClient}>
        <Table>
          <TableHeader
            headerList={HEADER_TABLE}
            filters={{ page: 1, limit: 10 }}
          />
        </Table>
      </QueryClientProvider>,
    );
    expect(Header).toMatchSnapshot();
  });
});
