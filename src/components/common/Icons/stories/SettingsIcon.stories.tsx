import type { Meta, StoryObj } from "@storybook/react";

// Components
import { SettingsIcon } from "../SettingsIcon";

const meta: Meta<typeof SettingsIcon> = {
  title: "Icons/SettingsIcon",
  component: SettingsIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SettingsIcon>;

export const Primary: Story = {};
