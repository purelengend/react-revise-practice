import type { Meta, StoryObj } from "@storybook/react";

// Components
import SearchForm from ".";

const meta: Meta<typeof SearchForm> = {
  title: "Components/common/SearchForm",
  component: SearchForm,
  argTypes: {
    onSubmit: {
      description: "The submit callback of the form",
    },
  },
  args: {
    onSubmit: () => {},
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchForm>;

export const Primary: Story = {};
