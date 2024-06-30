import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Select } from "@chakra-ui/react";

// Components
import { SortArrowDownIcon, SortArrowUpIcon, SortIcon } from "../Icons";

// Types
import { SortProps } from "@/types";

// Constants
import { QUERY_PARAMS } from "@/constants";

const SortSelect = (props: { sortList: Array<SortProps> }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isAscending, setIsAscending] = useState(true);

  const sortBy = searchParams.get(QUERY_PARAMS.SORTBY);
  // const { refetchStudents } = useStudent();

  useEffect(() => {
    if (sortBy) {
      isAscending
        ? searchParams.set(QUERY_PARAMS.ORDER, "asc")
        : searchParams.set(QUERY_PARAMS.ORDER, "desc");

      setSearchParams(searchParams);
    }
  }, [isAscending, searchParams, setSearchParams, sortBy]);

  // useEffect(() => {
  //   refetchStudents();
  // }, [path, refetchStudents]);

  const SortByStateIcon = useMemo(
    () =>
      !sortBy ? (
        <SortIcon data-testid="default" />
      ) : isAscending ? (
        <SortArrowUpIcon data-testid="asc" />
      ) : (
        <SortArrowDownIcon data-testid="desc" />
      ),
    [isAscending, sortBy],
  );

  const orderCallback = useCallback(() => setIsAscending((prev) => !prev), []);

  const sortCallback = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      searchParams.set(QUERY_PARAMS.SORTBY, e.target.value);

      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  return (
    <>
      <Button
        type="button"
        bg="transparent"
        _hover={{
          bg: "blackAlpha.100",
        }}
        onClick={orderCallback}
        isDisabled={!sortBy}
        data-testid="sort-button"
      >
        {SortByStateIcon}
      </Button>

      <Select
        w={45}
        h={11}
        color="gray.200"
        fontSize="sm"
        value={sortBy ?? ""}
        onChange={sortCallback}
      >
        <option hidden disabled value="">
          Select a field
        </option>

        {props.sortList.map((sort) => (
          <option key={sort.title} value={sort.value}>
            {sort.title}
          </option>
        ))}
      </Select>
    </>
  );
};

export default SortSelect;
