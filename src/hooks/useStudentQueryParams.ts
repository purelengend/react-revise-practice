import { useSearchParams } from "react-router-dom";

// Constants
import { PAGE_LIMIT, QUERY_PARAMS } from "@/constants";

export const useStudentQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get(QUERY_PARAMS.PAGE)) || 1;
  const limit = Number(searchParams.get(QUERY_PARAMS.LIMIT)) || PAGE_LIMIT;
  const sortBy = searchParams.get(QUERY_PARAMS.SORTBY) || "";
  const order = searchParams.get(QUERY_PARAMS.ORDER) || "";
  const name = searchParams.get(QUERY_PARAMS.NAME) || "";

  return {
    page,
    limit,
    sortBy,
    order,
    name,
    searchParams,
    setSearchParams,
  };
};
