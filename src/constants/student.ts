// Types
import { Student } from "@/types";

// Constants
import { DEFAULT_STUDENT_AVATAR_URL } from "./avatar";

export const DEFAULT_STUDENT_DATA: Student = {
  id: "",
  name: "",
  email: "",
  phone: "",
  dateOfAdmission: 0,
  avatarUrl: DEFAULT_STUDENT_AVATAR_URL,
} as const;

export const DEFAULT_STUDENT_NAME = "Karthi Madesh";
