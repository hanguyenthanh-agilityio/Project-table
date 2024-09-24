// Styles
import "./style.css";
import { Box } from "@chakra-ui/react";
import { HEADER_TABLE, OPTION_SORT } from "@/constants";
import { Input, Modal, Pagination, Select, Table } from "@/components";
import { PROJECT_LIST } from "@/mocks/table";

const Home = () => {
  return (
    <>
      <Box color="brand.900" textAlign="center">
        Home Page
        <Select options={OPTION_SORT} />
        <Input onKeyDown={() => {}} />
        <Modal
          modalTitle="Add new Project"
          // isOpen={true}
          buttonAction="Update"
          ButtonClose="Cancel"
          onClose={() => {}}
        />
        {/* <FormModal
          modalTitle={"Add new Project"}
          buttonLabel={"Update"}
          onClose={() => {}}
          onConfirm={() => {}}
        /> */}
        <Pagination
          projects={[]}
          onClickPrevious={() => {}}
          onClickNext={() => {}}
        />
        <Table headerList={HEADER_TABLE} projects={PROJECT_LIST} />
      </Box>
    </>
  );
};

export default Home;
