import type { Meta, StoryObj } from "@storybook/react";

// Components
import Header from ".";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ width: "100vh" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
