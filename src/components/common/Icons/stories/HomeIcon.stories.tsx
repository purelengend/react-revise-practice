import type { Meta, StoryObj } from "@storybook/react";

// Components
import { HomeIcon } from "../HomeIcon";

const meta: Meta<typeof HomeIcon> = {
  title: "Icons/HomeIcon",
  component: HomeIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof HomeIcon>;

export const Primary: Story = {};
