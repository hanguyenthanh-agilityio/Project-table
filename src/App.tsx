import { ChakraProvider } from "@chakra-ui/react";

// Pages
import { Home } from "@/pages";
import CHAKRA_THEME_DEFAULT from "./themes/chakra";

// Themes

const App = () => (
  <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
    <Home />
  </ChakraProvider>
);

export default App;
