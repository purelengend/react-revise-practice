import type { Meta, StoryObj } from "@storybook/react";

// Components
import { DeleteIcon } from "../DeleteIcon";

const meta: Meta<typeof DeleteIcon> = {
  title: "Icons/DeleteIcon",
  component: DeleteIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof DeleteIcon>;

export const Primary: Story = {};
