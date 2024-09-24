import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import * as components from "./components";

const overrides = {
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: { ...components },
  colors,
};

const CHAKRA_THEME_DEFAULT = extendTheme(overrides);

export default CHAKRA_THEME_DEFAULT;
