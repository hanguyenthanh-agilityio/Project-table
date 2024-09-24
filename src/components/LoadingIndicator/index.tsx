import { Box, Spinner } from "@chakra-ui/react";

const LoadingIndicator = () => (
  <Box
    display="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
    data-testid="loading-indicator"
  >
    <Spinner
      thickness="4px"
      width="30px"
      height="30px"
      speed="0.65s"
      emptyColor="inactive.secondary"
      color="brand.80"
    />
  </Box>
);

export default LoadingIndicator;
