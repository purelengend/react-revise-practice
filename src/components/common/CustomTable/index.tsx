import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ReactElement, useMemo } from "react";

export type ColumnProps<T> = {
  key: string;
  title: string | ReactElement;
  render?: (item: T) => ReactElement;
};

export type TableProps<T> = {
  columns: Array<ColumnProps<T>>;
  data?: Array<T>;
  isFetching: boolean;
};

const CustomTable = <T,>({ columns, data, isFetching }: TableProps<T>) => {
  const headers = useMemo(
    () =>
      columns.map((column) => {
        return (
          <Th minW={30} key={`tableHeadCell-${column.title}`} color="gray.200">
            {column.title}
          </Th>
        );
      }),
    [columns],
  );

  const rows = useMemo(
    () =>
      !data?.length ? (
        <Tr opacity={isFetching ? 0.5 : 1}>
          <Td colSpan={columns.length} textAlign="center">
            No data
          </Td>
        </Tr>
      ) : (
        data.map((row, rowIndex) => {
          return (
            <Tr
              opacity={isFetching ? 0.5 : 1}
              bg="white"
              h={21.25}
              borderRadius="lg"
              key={`row-${rowIndex}`}
              sx={{
                "& td:first-of-type, & td:last-of-type": {
                  borderRadius: "lg",
                },
              }}
            >
              {columns.map((column, columnIndex) => {
                const value = column.render
                  ? column.render(row as T)
                  : (row[column.key as keyof typeof row] as string);

                return <Td key={`cell-${columnIndex}`}>{value}</Td>;
              })}
            </Tr>
          );
        })
      ),
    [columns, data, isFetching],
  );
  return (
    <TableContainer>
      <Table
        w="full"
        __css={{
          borderCollapse: "separate",
          borderSpacing: "0 10px",
        }}
        variant="unstyled"
      >
        <Thead h={21.25}>
          <Tr>{headers}</Tr>
        </Thead>
        <Tbody>{rows}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
