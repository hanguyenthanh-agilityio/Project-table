import { Box, Container, Flex } from "@chakra-ui/react";

// Components
import { Header, Pagination, Table, FilterBar } from "@/components";

// Constants
import { HEADER_TABLE } from "@/constants";

// Mocks
import { PROJECT_LIST } from "@/mocks/table";

const Home = () => {
  return (
    <>
      <Box>
        <Container p="0" maxW="100%">
          <Header title="Projects" />
          <Flex flexDir="column">
            <FilterBar
              isLoading={false}
              onChangeSearch={() => {}}
              onConfirm={() => {}}
            />
            <Table headerList={HEADER_TABLE} projects={PROJECT_LIST} />
            <Pagination
              projects={PROJECT_LIST}
              onClickPrevious={() => {}}
              onClickNext={() => {}}
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Home;
