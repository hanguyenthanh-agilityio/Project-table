import { Box, Container, Flex } from "@chakra-ui/react";

// Components
import { Header, Pagination, Table, FilterBar } from "@/components";

// Constants
import { HEADER_TABLE } from "@/constants";

// Mocks
import { PROJECT_LIST } from "@/mocks/table";

const Home = () => {
  // Handle Search project
  const handleChangeSearch = () => {};

  // Handle Confirm add new project
  const handleConfirm = () => {};

  // Handle pagination
  const handleClickPrevious = () => {};
  const handleCLickNext = () => {};
  return (
    <>
      <Box>
        <Container p="0" maxW="100%">
          <Header title="Projects" />
          <Flex flexDir="column">
            <FilterBar
              isLoading={false}
              onChangeSearch={handleChangeSearch}
              onConfirm={handleConfirm}
            />
            <Table headerList={HEADER_TABLE} projects={PROJECT_LIST} />
            <Pagination
              projects={PROJECT_LIST}
              onClickPrevious={handleClickPrevious}
              onClickNext={handleCLickNext}
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Home;
