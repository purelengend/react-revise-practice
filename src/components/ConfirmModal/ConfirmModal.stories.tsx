import type { Meta, StoryObj } from "@storybook/react";
import { Center } from "@chakra-ui/react";
import { useArgs } from "@storybook/preview-api";

// Components
import ConfirmModal from ".";

const meta: Meta<typeof ConfirmModal> = {
  title: "Components/ConfirmModal",
  component: ConfirmModal,
  decorators: [
    (Story) => (
      <Center style={{ width: "100vh" }}>
        <Story />
      </Center>
    ),
  ],
  argTypes: {
    id: {
      description: "Id of the student to be confirmed",
    },
    isMutating: {
      description: "Determine whether the form is mutating or not",
    },
    isOpen: {
      description: "Determine whether the modal is open or not",
    },
    onClose: {
      description: "Function to close the modal",
    },
    onSubmit: {
      description: "Function to submit the form",
    },
  },

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Primary: Story = {
  args: {
    id: "0",
    isMutating: false,
    isOpen: true,
    onSubmit: () => {},
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<typeof args>();

    const onClose = () => {
      updateArgs({ isOpen: false });
    };

    return <ConfirmModal {...args} onClose={onClose} />;
  },
};
