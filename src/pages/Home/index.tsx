// Styles
import Select from "@/components/Select";
import "./style.css";
import { Box } from "@chakra-ui/react";
import { OPTION_SORT } from "@/constants";
import Input from "@/components/Input";

const Home = () => {
  return (
    <>
      <Box color="brand.900" textAlign="center">
        Home Page
        <Select options={OPTION_SORT} />
        <Input onKeyDown={() => {}} />
      </Box>
    </>
  );
};

export default Home;
