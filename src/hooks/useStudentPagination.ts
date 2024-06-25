import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

// Services
import { getAllStudents } from "@/services";

// Constants
import { QUERY_KEY } from "@/constants";

// Context
import { UrlContext } from "@/context";

export const useStudentPagination = () => {
  const { filterValue } = useContext(UrlContext);
  const { data: allStudents, refetch: refetchAllStudents } = useQuery({
    queryKey: [QUERY_KEY.STUDENT],
    queryFn: () => getAllStudents(`?name=${filterValue}`),
  });

  return {
    allStudents: allStudents ?? [],
    refetchAllStudents,
  };
};
