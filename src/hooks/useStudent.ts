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
import { QUERY_KEY, TOAST_DEFAULT_OPTIONS, TOAST_MSG } from "@/constants";

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
      if (id === "") {
        toast({
          ...TOAST_DEFAULT_OPTIONS.SUCCESS,
          title: TOAST_MSG.ADD.SUCCESS.title,
          description: TOAST_MSG.ADD.SUCCESS.description,
        });
      } else {
        toast({
          ...TOAST_DEFAULT_OPTIONS.SUCCESS,
          title: TOAST_MSG.EDIT.SUCCESS.title,
          description: TOAST_MSG.EDIT.SUCCESS.description,
        });
      }

      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.STUDENT, path] });
    },
    onError: (_, { id }) => {
      if (id === "") {
        toast({
          ...TOAST_DEFAULT_OPTIONS.ERROR,
          title: TOAST_MSG.ADD.ERROR.title,
          description: TOAST_MSG.ADD.ERROR.description,
        });
        return;
      }
      toast({
        ...TOAST_DEFAULT_OPTIONS.ERROR,
        title: TOAST_MSG.EDIT.ERROR.title,
        description: TOAST_MSG.EDIT.ERROR.description,
      });
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
      toast({
        ...TOAST_DEFAULT_OPTIONS.SUCCESS,
        title: TOAST_MSG.DELETE.SUCCESS.title,
        description: TOAST_MSG.DELETE.SUCCESS.description,
      });

      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.STUDENT, path] });
    },
    onError: () => {
      toast({
        ...TOAST_DEFAULT_OPTIONS.ERROR,
        title: TOAST_MSG.DELETE.ERROR.title,
        description: TOAST_MSG.DELETE.ERROR.description,
      });
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
