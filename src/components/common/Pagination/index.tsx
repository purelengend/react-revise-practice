import { QUERY_PARAMS } from "@/constants";
import { useQueryParams } from "@/hooks";
import { Button, Center } from "@chakra-ui/react";
import { memo, useCallback } from "react";

export type PaginationProps = {
  totalRecords: number;
  pageLimit: number;
};

const Pagination = ({ totalRecords, pageLimit }: PaginationProps) => {
  const { page: currentPage, searchParams, setSearchParams } = useQueryParams();

  const pages: Array<number> = [];

  for (let i = 1; i <= Math.ceil(totalRecords / pageLimit); i++) {
    pages.push(i);
  }

  const handlePageChange = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      searchParams.set(QUERY_PARAMS.PAGE, e.currentTarget.value);

      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );
  return (
    <Center mt={15} gap={5}>
      {pages.map((page) => {
        return (
          <Button
            key={page}
            value={page}
            px={4}
            py={1.5}
            fontSize="sm"
            bg="white.200"
            _hover={{
              bg: "yellow.100",
            }}
            _active={{
              bg: "yellow.200",
            }}
            isActive={currentPage === page}
            onClick={handlePageChange}
          >
            {page}
          </Button>
        );
      })}
    </Center>
  );
};

const MemorizedPagination = memo(Pagination);
export default MemorizedPagination;
