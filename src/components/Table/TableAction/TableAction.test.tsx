import { render } from "@testing-library/react";

// Components
import { Table } from "@chakra-ui/react";

// Constants

import ActionCell from ".";
import { PROJECT_ITEM } from "@/mocks/table";
import { QueryClient, QueryClientProvider } from "react-query";

describe("Select component", () => {
  const queryClient = new QueryClient();

  it("should render TableAction snapshot correctly", () => {
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Table>
          <ActionCell project={PROJECT_ITEM} />
        </Table>
      </QueryClientProvider>,
    );
    expect(component).toMatchSnapshot();
  });
});
