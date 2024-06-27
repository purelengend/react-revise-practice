import type { Meta, StoryObj } from "@storybook/react";

// Components
import { SearchIcon } from "../SearchIcon";

const meta: Meta<typeof SearchIcon> = {
  title: "Icons/SearchIcon",
  component: SearchIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchIcon>;

export const Primary: Story = {};
