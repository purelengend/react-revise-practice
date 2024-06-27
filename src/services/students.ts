// Service
import createHttp from "./http";

// Types
import { Student } from "@/types";

// Constants
import { API, ROUTES } from "@/constants";

// Utils
import { required } from "@/utils";

const http = createHttp({
  baseURL: `${required(API.STUDENT)}/${ROUTES.STUDENT}`,
});

export const getAllStudents = async (path: string): Promise<Student[]> =>
  (await http.get<Student[]>(path)).data;

export const getStudentById = async (id: string): Promise<Student[]> =>
  (await http.get<Student[]>(`/${id}`)).data;

export const createOrUpdateStudent = async (
  data: Student,
): Promise<Student> => {
  if (data.id) {
    const dataWithDate: Student = {
      ...data,
      dateOfAdmission: Date.now(),
    };
    return (await http.post<Student, Student>("", dataWithDate)).data;
  }

  return (await http.put<Student>(`/${data.id}`, data)).data;
};

export const deleteStudentById = async (id: string): Promise<Student> =>
  (await http.delete<Student>(`/${id}`)).data;
