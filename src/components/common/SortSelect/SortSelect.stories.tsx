import type { Meta, StoryObj } from "@storybook/react";
import { Center } from "@chakra-ui/react";

// Components
import SortSelect from ".";

// Constants
import { SORT_BY_OPTION_LIST } from "@/constants";

const meta: Meta<typeof SortSelect> = {
  title: "Components/SortSelect",
  component: SortSelect,
  decorators: [
    (Story) => (
      <Center style={{ width: "100vh" }}>
        <Story />
      </Center>
    ),
  ],
  argTypes: {
    sortList: {
      description: "The list of selection options for sorting",
    },
  },
  args: {
    sortList: SORT_BY_OPTION_LIST,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SortSelect>;

export const Primary: Story = {};
