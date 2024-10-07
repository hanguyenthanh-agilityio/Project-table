import "@testing-library/jest-dom";
import { render, renderHook } from "@testing-library/react";

// Components
import Home from ".";

// Constants

import { QueryClient, QueryClientProvider } from "react-query";
import { useDebounce } from "@/hooks";
import { act, useState } from "react";

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useDisclosure: jest.fn(() => ({
    onClose: jest.fn(),
  })),
  useToast: jest.fn(),
}));

jest.mock("@/hooks", () => ({
  useAddProjectMutation: jest.fn(),
  useDebounce: jest.fn((fn) => fn),
}));

const useSearchProjectHook = () => {
  const initialFilters = {
    projectName: "",
    page: 1,
    limit: 10,
  };

  const [filter, setFilter] = useState(initialFilters);

  const handleChangeSearch = (projectName: string) => {
    setFilter({ ...filter, projectName });
  };

  const optimizeFn = useDebounce(handleChangeSearch);

  return {
    filter,
    handleChangeSearch,
    optimizeFn,
  };
};

describe("Home component", () => {
  it("should render Home snapshot correctly", () => {
    const queryClient = new QueryClient();

    const page = render(
      <QueryClientProvider client={queryClient}>
        <Home />,
      </QueryClientProvider>,
    );
    expect(page).toMatchSnapshot();
  });

  it("Should render Home correctly when handleChangeSearch is called", () => {
    const { result } = renderHook(() => useSearchProjectHook());

    expect(result.current.filter.projectName).toBe("");

    act(() => {
      result.current.handleChangeSearch("Test Project");
    });

    expect(result.current.filter.projectName).toBe("Test Project");
  });
});
