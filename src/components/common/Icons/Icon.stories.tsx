/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from "@storybook/react";
import { ReactElement, cloneElement } from "react";
import { IconProps } from "@chakra-ui/react";

// Components
import {
  AttachmentIcon,
  CourseIcon,
  DefaultAvatarIcon,
  DeleteIcon,
  EditIcon,
  HomeIcon,
  NotificationIcon,
  PaymentIcon,
  ReportIcon,
  SearchIcon,
  SettingsIcon,
  SortArrowDownIcon,
  SortArrowUpIcon,
  SortIcon,
  StudentsIcon,
} from "@/components/common/Icons";

type StoryWrapperProps = IconProps & {
  children: ReactElement;
};
const StoryWrapper = ({ children }: StoryWrapperProps) => {
  return children;
};

const meta: Meta<typeof StoryWrapper> = {
  title: "Components/common/Icons",
  component: AttachmentIcon,
  argTypes: {
    children: { table: { disable: true } },
    boxSize: {
      control: "select",
      options: [4, 8, 12, 16, 20],
    },
    color: { control: "color" },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof StoryWrapper>;

const template: Story = {
  render: ({ children, ...rest }) => {
    return cloneElement(children, rest);
  },
};

export const attachmentIcon: Story = {
  ...template,
  args: {
    children: <AttachmentIcon />,
  },
};

export const courseIcon: Story = {
  ...template,
  args: {
    children: <CourseIcon />,
  },
};

export const defaultAvatarIcon: Story = {
  ...template,
  args: {
    children: <DefaultAvatarIcon />,
  },
};

export const deleteIcon: Story = {
  ...template,

  args: {
    children: <DeleteIcon />,
  },
};

export const editIcon: Story = {
  ...template,

  args: {
    children: <EditIcon />,
  },
};

export const homeIcon: Story = {
  ...template,
  args: {
    children: <HomeIcon />,
  },
};

export const notificationIcon: Story = {
  ...template,
  args: {
    children: <NotificationIcon />,
  },
};

export const paymentIcon: Story = {
  ...template,
  args: {
    children: <PaymentIcon />,
  },
};

export const reportIcon: Story = {
  ...template,
  args: {
    children: <ReportIcon />,
  },
};

export const searchIcon: Story = {
  ...template,
  args: {
    children: <SearchIcon />,
  },
};

export const settingsIcon: Story = {
  ...template,
  args: {
    children: <SettingsIcon />,
  },
};

export const sortArrowDownIcon: Story = {
  ...template,
  args: {
    children: <SortArrowDownIcon />,
  },
};

export const sortArrowUpIcon: Story = {
  ...template,
  args: {
    children: <SortArrowUpIcon />,
  },
};

export const sortIcon: Story = {
  ...template,
  args: {
    children: <SortIcon />,
  },
};

export const studentsIcon: Story = {
  ...template,
  args: {
    children: <StudentsIcon />,
  },
};
