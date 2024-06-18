import { Center, ChakraProvider } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
import React from "react";

// Themes
import themes from "../src/themes";
import { Fonts } from "../src/themes/base";

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
        <Fonts />
        <Center>
          <Story />
        </Center>
      </ChakraProvider>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
