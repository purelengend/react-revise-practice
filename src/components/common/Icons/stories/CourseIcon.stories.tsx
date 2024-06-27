import type { Meta, StoryObj } from "@storybook/react";

// Components
import { CourseIcon } from "../CourseIcon";

const meta: Meta<typeof CourseIcon> = {
  title: "Icons/CourseIcon",
  component: CourseIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof CourseIcon>;

export const Primary: Story = {};
