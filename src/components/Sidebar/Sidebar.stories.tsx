import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

// Components
import Sidebar from ".";

// Contexts
import { SidebarContextProvider } from "@/context";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <SidebarContextProvider>
          <Story />
        </SidebarContextProvider>
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
