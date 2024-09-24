import { Flex } from "@chakra-ui/react";

// Components
import { Pagination, Table, FilterBar } from "@/components";

// Constants
import { HEADER_TABLE } from "@/constants";

// Mocks
import { PROJECT_LIST } from "@/mocks/table";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <>
      <Sidebar>
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
      </Sidebar>
    </>
  );
};

export default Home;
