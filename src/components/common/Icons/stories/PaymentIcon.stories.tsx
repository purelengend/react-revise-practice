import type { Meta, StoryObj } from "@storybook/react";

// Components
import { PaymentIcon } from "../PaymentIcon";

const meta: Meta<typeof PaymentIcon> = {
  title: "Icons/PaymentIcon",
  component: PaymentIcon,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof PaymentIcon>;

export const Primary: Story = {};
