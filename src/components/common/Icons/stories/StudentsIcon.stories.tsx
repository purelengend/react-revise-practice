import type { Meta, StoryObj } from "@storybook/react";

// Components
import { StudentsIcon } from "../StudentsIcon";

const meta: Meta<typeof StudentsIcon> = {
  title: "Icons/StudentsIcon",
  component: StudentsIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof StudentsIcon>;

export const Primary: Story = {};
