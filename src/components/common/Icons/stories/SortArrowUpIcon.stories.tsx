import type { Meta, StoryObj } from "@storybook/react";

// Components
import { SortArrowUpIcon } from "../SortArrowUpIcon";

const meta: Meta<typeof SortArrowUpIcon> = {
  title: "Icons/SortArrowUpIcon",
  component: SortArrowUpIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SortArrowUpIcon>;

export const Primary: Story = {};
