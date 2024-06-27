import type { Meta, StoryObj } from "@storybook/react";

// Components
import { NotificationIcon } from "../NotificationIcon";

const meta: Meta<typeof NotificationIcon> = {
  title: "Icons/NotificationIcon",
  component: NotificationIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof NotificationIcon>;

export const Primary: Story = {};
