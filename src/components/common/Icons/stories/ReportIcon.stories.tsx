import type { Meta, StoryObj } from "@storybook/react";

// Components
import { ReportIcon } from "../ReportIcon";

const meta: Meta<typeof ReportIcon> = {
  title: "Icons/ReportIcon",
  component: ReportIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReportIcon>;

export const Primary: Story = {};
