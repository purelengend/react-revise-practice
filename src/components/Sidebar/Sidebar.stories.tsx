import type { Meta, StoryObj } from "@storybook/react";

// Components
import Sidebar from ".";

// Contexts

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [(Story) => <Story />],
  argTypes: {
    isOpen: {
      description: "Whether the sidebar is open or closed",
    },
    onClose: {
      description: "Function to close the sidebar",
    },
  },
  args: {
    isOpen: true,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {};
