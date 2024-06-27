import type { Meta, StoryObj } from "@storybook/react";

// Components
import { SortArrowDownIcon } from "../SortArrowDownIcon";

const meta: Meta<typeof SortArrowDownIcon> = {
  title: "Icons/SortArrowDownIcon",
  component: SortArrowDownIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SortArrowDownIcon>;

export const Primary: Story = {};
