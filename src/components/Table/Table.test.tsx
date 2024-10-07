import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

// Components
import Table from ".";

// Constants
import { HEADER_TABLE } from "@/constants/table";
import { QueryClient, QueryClientProvider } from "react-query";

describe("Table component", () => {
  it("should render Table snapshot correctly", () => {
    const queryClient = new QueryClient();

    const table = render(
      <QueryClientProvider client={queryClient}>
        <Table headerList={HEADER_TABLE} filters={{ page: 1, limit: 10 }} />,
      </QueryClientProvider>,
    );
    expect(table).toMatchSnapshot();
  });
});
