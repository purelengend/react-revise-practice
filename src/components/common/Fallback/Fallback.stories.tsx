import type { Meta, StoryObj } from "@storybook/react";
import { Center } from "@chakra-ui/react";

// Components
import Fallback from ".";

const meta: Meta<typeof Fallback> = {
  title: "Components/Fallback",
  component: Fallback,
  decorators: [
    (Story) => (
      <Center style={{ width: "100vh" }}>
        <Story />
      </Center>
    ),
  ],

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Fallback>;

export const Primary: Story = {};
