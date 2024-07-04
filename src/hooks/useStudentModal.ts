import { useState } from "react";

// Constants
import { DEFAULT_STUDENT_DATA } from "@/constants";

// Types
import { Student } from "@/types";

export const useStudentModal = () => {
  const [student, setStudent] = useState<Student>(DEFAULT_STUDENT_DATA);

  const [studentId, setStudentId] = useState<string>("");

  return {
    student,
    setStudent,
    studentId,
    setStudentId,
  };
};
