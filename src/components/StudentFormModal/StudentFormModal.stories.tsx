import type { Meta, StoryObj } from "@storybook/react";
import { Center } from "@chakra-ui/react";
import { useArgs } from "@storybook/preview-api";

// Components
import StudentFormModal from ".";

// Constants
import { DEFAULT_STUDENT_AVATAR_URL } from "@/constants";

const meta: Meta<typeof StudentFormModal> = {
  title: "Components/StudentFormModal",
  component: StudentFormModal,
  decorators: [
    (Story) => (
      <Center style={{ width: "100vh" }}>
        <Story />
      </Center>
    ),
  ],
  argTypes: {
    isOpen: {
      description: "Determine whether the modal is open or not",
    },
    onClose: {
      description: "Function to close the modal",
    },
    onSubmit: {
      description: "Function to submit the form",
    },
    isMutating: {
      description: "Determine whether the form is mutating or not",
    },
    student: {
      description: "Student data of the form",
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof StudentFormModal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    onSubmit: () => {},
    isMutating: false,
    student: {
      id: "1",
      name: "John Doe",
      email: "john.doe@gmail.com",
      avatarUrl: DEFAULT_STUDENT_AVATAR_URL,
      dateOfAdmission: Date.now(),
      phone: "0905150899",
    },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<typeof args>();

    const onClose = () => {
      updateArgs({ isOpen: false });
    };

    return <StudentFormModal {...args} onClose={onClose} />;
  },
};
