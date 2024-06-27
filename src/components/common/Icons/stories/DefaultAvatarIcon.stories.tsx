import type { Meta, StoryObj } from "@storybook/react";

// Components
import { DefaultAvatarIcon } from "../DefaultAvatarIcon";

const meta: Meta<typeof DefaultAvatarIcon> = {
  title: "Icons/DefaultAvatarIcon",
  component: DefaultAvatarIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof DefaultAvatarIcon>;

export const Primary: Story = {};
