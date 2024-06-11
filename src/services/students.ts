// Service
import createHttp from "./http";

// Types
import { Student } from "../types";

import { ROUTES } from "../constants";
import { AxiosResponse } from "axios";

const http = createHttp({
  baseURL: `${import.meta.env.VITE_STUDENT_API}/${ROUTES.STUDENT}`,
});

export const getAllStudentDetails = async (): Promise<
  AxiosResponse<Student[]>
> => http.get<Student[]>();
