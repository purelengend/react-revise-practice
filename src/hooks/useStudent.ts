import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useContext } from "react";
import { useToast } from "@chakra-ui/react";

// Services
import {
  createOrUpdateStudent,
  deleteStudentById,
  getAllStudents,
  getStudentById,
} from "@/services";

// Context
import { UrlContext } from "@/context";

// Types
import { Student } from "@/types";

// Constants
import { QUERY_KEY, TOAST_MSG, TOAST_STATUS } from "@/constants";

//Utils
import { customToast } from "@/utils";

export const useStudent = (id: string = "") => {
  const { path } = useContext(UrlContext);

  const queryClient = useQueryClient();

  const toast = useToast();

  const {
    data: students,
    refetch: refetchStudents,
    isFetching: isFetchingStudentData,
  } = useQuery({
    queryKey: [QUERY_KEY.STUDENT, path],
    queryFn: () => {
      return getAllStudents(path);
    },
    placeholderData: keepPreviousData,
  });

  const {
    mutate: mutateStudent,
    isPending: isMutatingStudent,
    isSuccess: isMutateStudentSuccess,
  } = useMutation({
    mutationKey: [QUERY_KEY.STUDENT, "mutation"],
    mutationFn: (data: Student) => createOrUpdateStudent(data),
    onSuccess: (_, { id }) => {
      if (id) {
        toast(
          customToast(
            TOAST_MSG.ADD.SUCCESS.title,
            TOAST_MSG.ADD.SUCCESS.description,
            TOAST_STATUS.SUCCESS,
          ),
        );
        return;
      }

      toast(
        customToast(
          TOAST_MSG.EDIT.SUCCESS.title,
          TOAST_MSG.EDIT.SUCCESS.description,
          TOAST_STATUS.SUCCESS,
        ),
      );

      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.STUDENT, path] });
    },
    onError: (_, { id }) => {
      if (id) {
        toast(
          customToast(
            TOAST_MSG.ADD.ERROR.title,
            TOAST_MSG.ADD.ERROR.description,
            TOAST_STATUS.ERROR,
          ),
        );
        return;
      }
      toast(
        customToast(
          TOAST_MSG.EDIT.ERROR.title,
          TOAST_MSG.EDIT.ERROR.description,
          TOAST_STATUS.ERROR,
        ),
      );
    },
  });

  const { data: studentByIdData } = useQuery({
    queryKey: [QUERY_KEY.STUDENT, id],
    queryFn: () => getStudentById(id),
  });

  const {
    mutate: deleteStudent,
    isPending: isDeletingStudent,
    isSuccess: isDeleteStudentSuccess,
  } = useMutation({
    mutationKey: [QUERY_KEY.STUDENT, "delete"],
    mutationFn: (id: string) => deleteStudentById(id),
    onSuccess: () => {
      toast(
        customToast(
          TOAST_MSG.DELETE.SUCCESS.title,
          TOAST_MSG.DELETE.SUCCESS.description,
          TOAST_STATUS.SUCCESS,
        ),
      );

      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.STUDENT, path] });
    },
    onError: () => {
      toast(
        customToast(
          TOAST_MSG.DELETE.ERROR.title,
          TOAST_MSG.DELETE.ERROR.description,
          TOAST_STATUS.ERROR,
        ),
      );
    },
  });
  return {
    students,
    refetchStudents,
    isFetchingStudentData,
    mutateStudent,
    isMutatingStudent,
    isMutateStudentSuccess,
    studentByIdData,
    deleteStudent,
    isDeletingStudent,
    isDeleteStudentSuccess,
  };
};
