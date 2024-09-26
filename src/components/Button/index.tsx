import { Box, Button } from "@chakra-ui/react";

type PropsTypes = {
  label: string;
  onClick: () => void;
};

const ButtonComponent = ({ label, onClick }: PropsTypes) => {
  return (
    <>
      <Button onClick={onClick}>{label}</Button>
      <Box bg="background.darkPurple">This is button component</Box>
    </>
  );
};

export default ButtonComponent;
