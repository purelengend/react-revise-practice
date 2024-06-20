import { keepPreviousData, useQuery } from "@tanstack/react-query";

// Services
import { getAllStudentDetails } from "@/services/students";
import { useContext } from "react";
import { UrlContext } from "@/context";

export const useStudent = () => {
  const { path } = useContext(UrlContext);

  const { data, refetch, isFetching } = useQuery({
    queryKey: ["students", path],
    queryFn: () => {
      return getAllStudentDetails(path);
    },
    placeholderData: keepPreviousData,
  });

  return {
    studentData: data,
    refetchStudentData: refetch,
    isFetchingStudentData: isFetching,
  };
};
