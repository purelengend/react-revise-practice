import type { Meta, StoryObj } from "@storybook/react";
import { Center } from "@chakra-ui/react";

// Components
import StudentConfirmModal from ".";

const meta: Meta<typeof StudentConfirmModal> = {
  title: "Components/StudentConfirmModal",
  component: StudentConfirmModal,
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
  args: {
    id: "0",
    isMutating: false,
    isOpen: true,
    onClose: () => {},
    onSubmit: () => {},
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof StudentConfirmModal>;

export const Primary: Story = {};
