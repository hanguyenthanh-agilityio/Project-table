import { Flex, useDisclosure, useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";
// Components
import { Table, FilterBar, Sidebar, LoadingIndicator } from "@/components";

// Constants
import { HEADER_TABLE } from "@/constants";

// Mocks
// import { PROJECT_LIST } from "@/mocks/table";

// Hooks
import { useAddProjectMutation, useProjectList } from "@/hooks/useProject";

// Types
import { Params, Project } from "@/types";
// import Pagination from "@/components/Pagination";

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
  const handleChangeSearch = useCallback((projectName: string) => {
    setFilter({ ...filter, projectName });
  }, []);

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
  const handleConfirm = useCallback((data: Project) => {
    addProject(data, {
      onSuccess: handleConfirmSuccess,
    });
  }, []);

  // Handle pagination
  // const handleClickPrevious = () => {};
  // const handleCLickNext = () => {};
  return (
    <>
      <Sidebar>
        <Flex flexDir="column">
          <FilterBar
            isLoading={isLoadingAdd}
            onChangeSearch={handleChangeSearch}
            onConfirm={handleConfirm}
            isOpen={isOpen}
            onClickAdd={onOpen}
            onClose={onClose}
          />
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <Table headerList={HEADER_TABLE} projects={projects} />
          )}
          {/* <Pagination
            projects={PROJECT_LIST}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleCLickNext}
          /> */}
        </Flex>
      </Sidebar>
    </>
  );
};

export default Home;
