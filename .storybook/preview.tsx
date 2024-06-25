import { Center, ChakraProvider } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Themes
import themes from "../src/themes";
import { Fonts } from "../src/themes/base";

// Context
import { UrlContextProvider, SidebarContextProvider } from "../src/context";

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
        <QueryClientProvider client={queryClient}>
          <UrlContextProvider>
            <SidebarContextProvider>
              <Fonts />
              <Center>
                <Story />
              </Center>
            </SidebarContextProvider>
          </UrlContextProvider>
        </QueryClientProvider>
      </ChakraProvider>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
