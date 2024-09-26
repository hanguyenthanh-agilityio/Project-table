import { Flex, useToast } from "@chakra-ui/react";

// Components
import {
  Pagination,
  Table,
  FilterBar,
  Sidebar,
  LoadingIndicator,
} from "@/components";

// Constants
import { HEADER_TABLE } from "@/constants";

// Mocks
import { PROJECT_LIST } from "@/mocks/table";
import { useProjectList } from "@/hooks/useProject";
import { useCallback } from "react";

const Home = () => {
  const toast = useToast();

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
  const { isLoading, data: projects } = useProjectList(
    { page: 1, limit: 10 },
    handleError,
  );

  // Handle Search project
  const handleChangeSearch = () => {};

  // Handle Confirm add new project
  const handleConfirm = () => {};

  // Handle pagination
  const handleClickPrevious = () => {};
  const handleCLickNext = () => {};
  return (
    <>
      <Sidebar>
        <Flex flexDir="column">
          <FilterBar
            isLoading={false}
            onChangeSearch={handleChangeSearch}
            onConfirm={handleConfirm}
          />
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <Table headerList={HEADER_TABLE} projects={projects} />
          )}
          <Pagination
            projects={PROJECT_LIST}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleCLickNext}
          />
        </Flex>
      </Sidebar>
    </>
  );
};

export default Home;
