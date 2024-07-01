import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

// Components
import Sidebar from ".";

// Contexts

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {};
