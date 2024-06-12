// Service
import createHttp from "./http";

// Types
import { Student } from "@/types";

// Constants
import { ROUTES } from "@/constants";

const http = createHttp({
  baseURL: `${import.meta.env.VITE_STUDENT_API}/${ROUTES.STUDENT}`,
});

export const getAllStudentDetails = async (): Promise<Student[]> =>
  (await http.get<Student[]>()).data;
