import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useContext } from "react";
import { useToast } from "@chakra-ui/react";

// Services
import { createOrUpdateStudent, getAllStudentDetails } from "@/services";

// Context
import { UrlContext } from "@/context";

// Types
import { Student } from "@/types";

// Constants
import { TOAST_DEFAULT_OPTIONS, TOAST_MSG } from "@/constants";

export const useStudent = () => {
  const { path } = useContext(UrlContext);

  const queryClient = useQueryClient();

  const toast = useToast();

  const {
    data: studentData,
    refetch: refetchStudentData,
    isFetching: isFetchingStudentData,
  } = useQuery({
    queryKey: ["students", path],
    queryFn: () => {
      return getAllStudentDetails(path);
    },
    placeholderData: keepPreviousData,
  });

  const {
    mutate: mutateStudent,
    isPending: isMutatingStudent,
    isSuccess: isMutateStudentSuccess,
  } = useMutation({
    mutationFn: (data: Student) => createOrUpdateStudent(data),
    onSuccess: () => {
      toast({
        ...TOAST_DEFAULT_OPTIONS.SUCCESS,
        title: TOAST_MSG.ADD.SUCCESS.title,
        description: TOAST_MSG.ADD.SUCCESS.description,
      });

      queryClient.invalidateQueries({ queryKey: ["students", path] });
    },
  });

  return {
    studentData,
    refetchStudentData,
    isFetchingStudentData,
    mutateStudent,
    isMutatingStudent,
    isMutateStudentSuccess,
  };
};
