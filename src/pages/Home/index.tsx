import { Flex, useDisclosure, useToast } from "@chakra-ui/react";
import { lazy, Suspense, useCallback, useState } from "react";
// Components
import { Sidebar, LoadingIndicator } from "@/components";
const FilterBar = lazy(() => import("@/components/FilterBar"));
const Table = lazy(() => import("@/components/Table"));

// Constants
import { HEADER_TABLE } from "@/constants";

// Hooks
import { useAddProjectMutation, useDebounce } from "@/hooks";

// Types
import { Params, Project } from "@/types";

const Home = () => {
  const { onClose } = useDisclosure();
  const toast = useToast();

  const initialFilters = {
    projectName: "",
    page: 1,
    limit: 10,
  };

  const [filter, setFilter] = useState<Params>(initialFilters);

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

  return (
    <>
      <Sidebar>
        <Flex flexDir="column">
          <Suspense fallback={<LoadingIndicator />}>
            <FilterBar
              isLoading={isLoadingAdd}
              onChangeSearch={optimizeFn}
              onConfirm={handleConfirm}
            />
            <Table headerList={HEADER_TABLE} filters={filter} />
          </Suspense>
        </Flex>
      </Sidebar>
    </>
  );
};

export default Home;
