import type { Meta, StoryObj } from "@storybook/react";

// Components
import { EditIcon } from "../EditIcon";

const meta: Meta<typeof EditIcon> = {
  title: "Icons/EditIcon",
  component: EditIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof EditIcon>;

export const Primary: Story = {};
