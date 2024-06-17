import type { Meta, StoryObj } from "@storybook/react";

// Components
import UserCard from ".";

// Constants
import { DEFAULT_AVATAR_URL } from "@/constants";

const meta: Meta<typeof UserCard> = {
  title: "Components/UserCard",
  component: UserCard,
  argTypes: {
    name: {
      description: "The name of the user card",
    },
    role: {
      description: "The role of the user card",
    },
    avatarUrl: {
      description: "The avatar url of the user card",
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof UserCard>;

export const Primary: Story = {
  args: {
    name: "John",
    role: "Admin",
    avatarUrl: DEFAULT_AVATAR_URL,
  },
};
