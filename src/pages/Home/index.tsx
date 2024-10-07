import { Flex, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { lazy, Suspense, useCallback, useState } from "react";
// Components
import { Sidebar, LoadingIndicator } from "@/components";
const FilterBar = lazy(() => import("@/components/FilterBar"));
const Pagination = lazy(() => import("@/components/Pagination"));
const Table = lazy(() => import("@/components/Table"));

// Constants
import { HEADER_TABLE } from "@/constants";

// Hooks
import { useAddProjectMutation, useProjectList } from "@/hooks/useProject";

// Types
import { Params, Project } from "@/types";
import { useDebounce } from "@/hooks/useDebounce";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const initialFilters = {
    projectName: "",
    page: 1,
    limit: 10,
  };

  const [filter, setFilter] = useState<Params>(initialFilters);

  const handleError = useCallback(
    (error: string) => {
      toast({
        title: error,
        status: "error",
        isClosable: true,
      });
    },
    [toast],
  );

  // Get list project
  const { isLoading, data: projects } = useProjectList(filter, handleError);

  const { mutate: addProject, isLoading: isLoadingAdd } =
    useAddProjectMutation();

  // Handle Search project
  const handleChangeSearch = useCallback(
    (projectName: string) => {
      setFilter({ ...filter, projectName });
    },
    [filter],
  );

  const optimizeFn = useCallback(useDebounce(handleChangeSearch), []);

  // Show message when create success and close modal
  const handleConfirmSuccess = useCallback(() => {
    onClose();
    toast({
      title: "Project created.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [onClose, toast]);

  // Handle Confirm add new project
  const handleConfirm = useCallback(
    (data: Project) => {
      addProject(data, {
        onSuccess: handleConfirmSuccess,
      });
    },
    [addProject, handleConfirmSuccess],
  );

  // Handle pagination
  const handleClickNext = useCallback(() => {
    setFilter({ ...filter, page: Number(filter.page) + 1 });
  }, [filter]);

  const handleClickPrevious = useCallback(() => {
    setFilter({ ...filter, page: Number(filter.page) - 1 });
  }, [filter]);

  const totalPages = Math.ceil(45 / filter.limit);

  return (
    <>
      <Sidebar>
        <Flex flexDir="column">
          <Suspense fallback={<LoadingIndicator />}>
            <FilterBar
              isLoading={isLoadingAdd}
              onChangeSearch={optimizeFn}
              onConfirm={handleConfirm}
              isOpen={isOpen}
              onClickAdd={onOpen}
              onClose={onClose}
            />
          </Suspense>

          {isLoading ? (
            <LoadingIndicator />
          ) : projects?.length === 0 ? (
            <Text>No projects found</Text>
          ) : (
            <Suspense fallback={<LoadingIndicator />}>
              <Table
                headerList={HEADER_TABLE}
                projects={projects}
                isLoading={isLoading}
              />
            </Suspense>
          )}
          <Suspense fallback={<LoadingIndicator />}>
            <Pagination
              projects={projects}
              disable={filter.page === 1}
              onClickPrevious={handleClickPrevious}
              onClickNext={handleClickNext}
              startIndex={filter.page}
              totalPages={totalPages}
              endIndex={filter.limit}
              totalItem={45}
            />
          </Suspense>
        </Flex>
      </Sidebar>
    </>
  );
};

export default Home;
