import { Center, ChakraProvider } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

// Themes
import themes from "../src/themes";
import { Fonts } from "../src/themes/base";

const queryClient = new QueryClient({});
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={themes}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Fonts />
            <Center>
              <Story />
            </Center>
          </QueryClientProvider>
        </BrowserRouter>
      </ChakraProvider>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
