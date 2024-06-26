import type { Meta, StoryObj } from "@storybook/react";
import { Center } from "@chakra-ui/react";

// Components
import Pagination from ".";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  decorators: [
    (Story) => (
      <Center style={{ width: "100vh" }}>
        <Story />
      </Center>
    ),
  ],
  argTypes: {
    totalRecords: {
      description: "The total number of records",
    },
    pageLimit: {
      description: "The number of records per page",
    },
  },
  args: {
    totalRecords: 30,
    pageLimit: 6,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {};
