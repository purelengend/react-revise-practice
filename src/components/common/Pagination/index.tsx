import { Button, Center } from "@chakra-ui/react";

export type PaginationProps = {
  totalRecords: number;
  pageLimit: number;
};

const Pagination = ({ totalRecords, pageLimit }: PaginationProps) => {
  const pages: Array<number> = [];

  for (let i = 1; i <= Math.ceil(totalRecords / pageLimit); i++) {
    pages.push(i);
  }
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
            onClick={(e) => console.log(e.currentTarget.value)}
          >
            {page}
          </Button>
        );
      })}
    </Center>
  );
};

export default Pagination;
