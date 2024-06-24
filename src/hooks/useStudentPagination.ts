import { useQuery } from "@tanstack/react-query";

// Services
import { getAllStudents } from "@/services";

export const useStudentPagination = () => {
  const { data: allStudents, refetch: refetchAllStudents } = useQuery({
    queryKey: ["students"],
    queryFn: () => getAllStudents(""),
  });

  return {
    allStudents,
    refetchAllStudents,
  };
};
