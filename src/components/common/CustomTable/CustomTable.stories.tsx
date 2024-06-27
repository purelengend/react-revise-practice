import type { Meta, StoryObj } from "@storybook/react";

// Components
import CustomTable from ".";

const meta: Meta<typeof CustomTable> = {
  title: "Components/CustomTable",
  component: CustomTable,
  argTypes: {
    columns: {
      description: "Array of column to render in the table head",
    },
    data: {
      description: "Array of data to render in the table cells",
    },
    isFetching: {
      description: "Whether the table is fetching data",
    },
  },
  args: {
    columns: [
      {
        title: "Name",
        key: "name",
      },
      {
        title: "Email",
        key: "email",
      },
      {
        title: "Phone",
        key: "phone",
      },
    ],
    data: [
      {
        name: "example",
        email: "example@gmail.com",
        phone: "0909090909",
      },
    ],
    isFetching: false,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomTable>;

export const Primary: Story = {};
