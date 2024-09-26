import { ChakraProvider } from "@chakra-ui/react";

// Pages
import { Home } from "@/pages";

// Themes
import CHAKRA_THEME_DEFAULT from "./themes/chakra";

// React query
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
      <Home />
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
