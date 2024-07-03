import { SortProps } from "@/types";

export const SORT_BY_OPTION_LIST: Array<SortProps> = [
  {
    title: "Name",
    value: "name",
  },
  {
    title: "Email",
    value: "email",
  },
  {
    title: "Phone",
    value: "phone",
  },
  {
    title: "Enroll Number",
    value: "enrollNumber",
  },
  {
    title: "Admission Date",
    value: "dateOfAdmission",
  },
] as const;
