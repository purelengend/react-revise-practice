import type { Meta, StoryObj } from "@storybook/react";

// Components
import { SortIcon } from "../SortIcon";

const meta: Meta<typeof SortIcon> = {
  title: "Icons/SortIcon",
  component: SortIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SortIcon>;

export const Primary: Story = {};
