import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

// Components
import Sidebar from ".";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    sidebarState: {
      description: "The state of the sidebar",
    },
    onCloseSidebar: {
      description: "The callback function to close the sidebar",
    },
  },
  args: {
    sidebarState: false,
    onCloseSidebar: () => {},
  },
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

export const Primary: Story = {
  args: {
    sidebarState: true,
    onCloseSidebar: () => {},
  },
};
