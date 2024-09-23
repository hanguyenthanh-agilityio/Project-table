// Styles
import Select from "@/components/Select";
import "./style.css";
import { Box } from "@chakra-ui/react";
import { OPTION_SORT } from "@/constants";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import FormModal from "@/components/FormModal";

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
        <FormModal
          modalTitle={"Add new Project"}
          buttonLabel={"Update"}
          onClose={() => {}}
          onConfirm={() => {}}
        />
      </Box>
    </>
  );
};

export default Home;
