import { Flex, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";
// Components
import {
  Table,
  FilterBar,
  Sidebar,
  LoadingIndicator,
  Pagination,
} from "@/components";

// Constants
import { HEADER_TABLE } from "@/constants";

// Hooks
import { useAddProjectMutation, useProjectList } from "@/hooks/useProject";

// Types
import { Params, Project } from "@/types";

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
  const handleConfirm = useCallback(
    (data: Project) => {
      addProject(data, {
        onSuccess: handleConfirmSuccess,
      });
    },
    [addProject, handleConfirmSuccess],
  );

  // Handle pagination
  const handleClickNext = () => {
    setFilter({ ...filter, page: Number(filter.page) + 1 });
  };

  const handleClickPrevious = () => {
    setFilter({ ...filter, page: Number(filter.page) - 1 });
  };

  const totalPages = Math.ceil(45 / filter.limit);

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
          ) : projects?.length === 0 ? (
            <Text>No projects found</Text>
          ) : (
            <Table headerList={HEADER_TABLE} projects={projects} />
          )}
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
        </Flex>
      </Sidebar>
    </>
  );
};

export default Home;
