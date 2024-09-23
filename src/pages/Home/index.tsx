// Styles
import Select from "@/components/Select";
import "./style.css";
import { Box } from "@chakra-ui/react";
import { OPTION_SORT } from "@/constants";

const Home = () => {
  return (
    <>
      <Box color="brand.900" textAlign="center">
        Home Page
        <Select options={OPTION_SORT} />
      </Box>
    </>
  );
};

export default Home;
