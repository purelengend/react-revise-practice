import type { Meta, StoryObj } from "@storybook/react";

// Components
import { AttachmentIcon } from "../AttachmentIcon";

const meta: Meta<typeof AttachmentIcon> = {
  title: "Icons/AttachmentIcon",
  component: AttachmentIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof AttachmentIcon>;

export const Primary: Story = {};
