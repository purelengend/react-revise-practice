// Icon Components
import {
  CourseIcon,
  HomeIcon,
  PaymentIcon,
  ReportIcon,
  StudentsIcon,
  SettingsIcon,
} from "@/components/common/Icons";

// Types
import { SideBarItemList } from "@/types/sidebar";

export const SIDEBAR_ITEM_LIST: SideBarItemList = [
  {
    title: "Home",
    icon: <HomeIcon />,
    destination: "/",
  },
  {
    title: "Course",
    icon: <CourseIcon />,
    destination: "/course",
  },
  {
    title: "Students",
    icon: <StudentsIcon />,
    destination: "/students",
  },
  {
    title: "Payment",
    icon: <PaymentIcon />,
    destination: "/payment",
  },
  {
    title: "Report",
    icon: <ReportIcon />,
    destination: "/report",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    destination: "/settings",
  },
] as const;
