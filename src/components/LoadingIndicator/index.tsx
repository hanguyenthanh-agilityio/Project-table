import { Box, Spinner, Text } from "@chakra-ui/react";

interface LoadingIndicatorProp {
  text?: string;
}
const LoadingIndicator = ({ text }: LoadingIndicatorProp) => (
  <Box
    display="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
    data-testid="loading-indicator"
  >
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
    <Text fontSize="20px" pt="5px">
      {text}
    </Text>
  </Box>
);

export default LoadingIndicator;
