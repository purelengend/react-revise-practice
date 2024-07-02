import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

// Services
import {
  createOrUpdateStudent,
  deleteStudentById,
  getAllStudents,
  getTotalStudents,
} from "@/services";

// Types
import { Student, QueryParams } from "@/types";

// Constants
import { QUERY_KEY } from "@/constants";

export const useGetStudents = ({
  page,
  limit,
  sortBy,
  order,
  name,
}: QueryParams) => {
  return useQuery({
    queryKey: [QUERY_KEY.STUDENT, page, limit, sortBy, order, name],
    queryFn: () => getAllStudents({ page, limit, sortBy, order, name }),
    placeholderData: keepPreviousData,
  });
};

export const useGetStudentCount = (name: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.STUDENT_COUNT, name],
    queryFn: () => getTotalStudents(name),
  });
};

export const useMutateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Student) => createOrUpdateStudent(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.STUDENT] });

      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.STUDENT_COUNT] });
    },
  });
};

export const useDeleteStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteStudentById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.STUDENT] });

      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.STUDENT_COUNT] });
    },
  });
};
