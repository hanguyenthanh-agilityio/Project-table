import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";

const overrides = {
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors,
};

const CHAKRA_THEME_DEFAULT = extendTheme(overrides);

export default CHAKRA_THEME_DEFAULT;
