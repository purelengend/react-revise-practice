// Service
import createHttp from "./http";

// Types
import { Student, QueryParams } from "@/types";

// Constants
import { API, ROUTES } from "@/constants";

// Utils
import { required } from "@/utils";

export const studentHttp = createHttp({
  baseURL: `${required(API.STUDENT)}/${ROUTES.STUDENT}`,
});

export const getAllStudents = async ({
  page,
  limit,
  sortBy,
  order,
  name,
}: QueryParams): Promise<Student[]> => {
  const params = name
    ? { page, limit, sortBy, order, name }
    : { page, limit, sortBy, order };

  return (await studentHttp.get<Student[]>("", params)).data;
};

export const getTotalStudents = async (name: string) => {
  const params = name ? { name } : {};

  try {
    return (await studentHttp.get<Student[]>("", params)).data.length;
  } catch (error) {
    return 0;
  }
};

export const getStudentById = async (id: string): Promise<Student> => {
  return (await studentHttp.get<Student>(`/${id}`)).data;
};

export const createOrUpdateStudent = async (
  data: Student,
): Promise<Student> => {
  if (!data.id) {
    const dataWithDate: Student = {
      ...data,
      dateOfAdmission: Date.now(),
    };
    return (await studentHttp.post<Student, Student>("", dataWithDate)).data;
  }

  return (await studentHttp.put<Student>(`/${data.id}`, data)).data;
};

export const deleteStudentById = async (id: string): Promise<Student> =>
  (await studentHttp.delete<Student>(`/${id}`)).data;
