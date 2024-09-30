import { AxiosError } from "axios";

// React query
import { useMutation, useQuery, useQueryClient } from "react-query";

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

// Add new project
export const useAddProjectMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload?: Project) =>
      await axiosClient.post<Project>(
        "https://66ea827255ad32cda4792c16.mockapi.io/projects",
        payload,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: "projects",
      });
    },
  });
};

// Edit project
export const useEditProjectMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Project) =>
      await axiosClient.put<Project>(`projects/${payload.id}`, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: "projects",
      });
    },
  });
};
