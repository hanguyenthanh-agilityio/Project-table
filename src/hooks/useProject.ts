import { AxiosError } from "axios";

// React query
import { useQuery } from "react-query";

// Services
import { axiosClient } from "@/services";

// Types
import { Project, Params } from "@/types";

// Get project list
export const useProjectList = (
  params: Params,
  onError: (error: string) => void,
) => {
  const { data, ...rest } = useQuery({
    queryKey: ["projects", params],
    queryFn: () => axiosClient.get<Project[]>("projects", { params }),
    onError: (error) => onError((error as AxiosError).message),
  });

  return {
    ...rest,
    data: data?.data || [],
  };
};
