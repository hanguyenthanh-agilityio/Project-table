import { axiosClient } from "@/services";
import { act, renderHook, waitFor } from "@testing-library/react";
import { ReactNode } from "react";

import { AxiosError } from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { PROJECT_ITEM, PROJECT_LIST } from "@/mocks/table";
import {
  useAddProjectMutation,
  useEditProjectMutation,
  useProjectList,
} from "./useProject";

interface Props {
  children?: ReactNode;
}

const spyGet = jest.spyOn(axiosClient, "get");
const spyPost = jest.spyOn(axiosClient, "post");
const spyPut = jest.spyOn(axiosClient, "put");

// useProjectList
describe("useProjectList", () => {
  const props = { page: 1, limit: 8 };
  const error = "Error";

  const queryClient = new QueryClient();
  const wrapper = ({ children }: Props) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  // Render correct data
  it("Should render correct data response form api", async () => {
    spyGet.mockImplementationOnce((): Promise<unknown> => {
      return Promise.resolve({ data: PROJECT_LIST });
    });

    const { result } = renderHook(() => useProjectList(props, () => error), {
      wrapper,
    });

    await waitFor(() => {
      const { isError, isSuccess, data } = result.current;

      expect(isSuccess).toBe(true);
      expect(isError).toBe(false);
      expect(data).toEqual(PROJECT_LIST);
    });
  });
});

// useAddProjectMutation
describe("useAddProjectMutation", () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: Props) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  // Render correct data
  it("Should render correct data response form api", async () => {
    // Mock API return
    spyPost.mockImplementationOnce((): Promise<unknown> => {
      return Promise.resolve();
    });

    const { result } = renderHook(() => useAddProjectMutation(), {
      wrapper,
    });

    // Call api
    act(() => {
      result.current.mutate(PROJECT_ITEM);
    });

    await waitFor(() => {
      const { isError, isSuccess } = result.current;

      expect(isSuccess).toBe(true);
      expect(isError).toBe(false);
    });
  });

  // Render error api
  it("Should render error when call api failure", async () => {
    const errorMsg = AxiosError;

    // Mock API return
    spyPost.mockImplementationOnce((): Promise<unknown> => {
      return Promise.reject(errorMsg);
    });

    const { result } = renderHook(() => useAddProjectMutation(), {
      wrapper,
    });

    // Call api
    act(() => {
      result.current.mutate(PROJECT_ITEM);
    });

    await waitFor(() => {
      const { isError, isSuccess } = result.current;

      expect(isSuccess).toBe(false);
      expect(isError).toBe(true);
    });
  });
});

// useEditProjectMutation
describe("useEditProjectMutation", () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: Props) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  // Render correct data
  it("Should render correct data response form api", async () => {
    // Mock API return
    spyPut.mockImplementationOnce((): Promise<unknown> => {
      return Promise.resolve();
    });

    const { result } = renderHook(() => useEditProjectMutation(), {
      wrapper,
    });

    // Call api
    act(() => {
      result.current.mutate(PROJECT_ITEM);
    });

    await waitFor(() => {
      const { isSuccess } = result.current;

      expect(isSuccess).toBe(true);
    });
  });

  // Render error api
  it("Should render correct data response form api", async () => {
    // Mock API return
    spyPut.mockImplementationOnce((): Promise<unknown> => {
      return Promise.reject();
    });

    const { result } = renderHook(() => useEditProjectMutation(), {
      wrapper,
    });

    // Call api
    act(() => {
      result.current.mutate(PROJECT_ITEM);
    });

    await waitFor(() => {
      const { isSuccess } = result.current;

      expect(isSuccess).toBe(false);
    });
  });
});
