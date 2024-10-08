import React from "react";
import { Preview } from "@storybook/react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import CHAKRA_THEME_DEFAULT from "../src/themes/chakra.ts";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
          <Story />
        </ChakraProvider>
      </QueryClientProvider>
    ),
  ],
};

export default preview;
