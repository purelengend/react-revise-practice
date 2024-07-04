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
    layout: "centered",
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
    boxSize: 4,
    color: "#000",
  },
};

export const courseIcon: Story = {
  ...template,
  args: {
    children: <CourseIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const defaultAvatarIcon: Story = {
  ...template,
  args: {
    children: <DefaultAvatarIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const deleteIcon: Story = {
  ...template,

  args: {
    children: <DeleteIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const editIcon: Story = {
  ...template,

  args: {
    children: <EditIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const homeIcon: Story = {
  ...template,
  args: {
    children: <HomeIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const notificationIcon: Story = {
  ...template,
  args: {
    children: <NotificationIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const paymentIcon: Story = {
  ...template,
  args: {
    children: <PaymentIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const reportIcon: Story = {
  ...template,
  args: {
    children: <ReportIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const searchIcon: Story = {
  ...template,
  args: {
    children: <SearchIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const settingsIcon: Story = {
  ...template,
  args: {
    children: <SettingsIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const sortArrowDownIcon: Story = {
  ...template,
  args: {
    children: <SortArrowDownIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const sortArrowUpIcon: Story = {
  ...template,
  args: {
    children: <SortArrowUpIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const sortIcon: Story = {
  ...template,
  args: {
    children: <SortIcon />,
    boxSize: 4,
    color: "#000",
  },
};

export const studentsIcon: Story = {
  ...template,
  args: {
    children: <StudentsIcon />,
    boxSize: 4,
    color: "#000",
  },
};
