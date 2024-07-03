import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Button, Select } from "@chakra-ui/react";

// Components
import { SortArrowDownIcon, SortArrowUpIcon } from "../Icons";

// Types
import { SortProps } from "@/types";

// Constants
import { QUERY_PARAMS } from "@/constants";

// Hooks
import { useQueryParams } from "@/hooks";

const SortSelect = memo((props: { sortList: Array<SortProps> }) => {
  const [isAscending, setIsAscending] = useState(false);

  const { searchParams, setSearchParams, sortBy } = useQueryParams();

  // Set default sort parameter
  useEffect(() => {
    if (!sortBy) {
      searchParams.set(
        QUERY_PARAMS.SORTBY,
        props.sortList[props.sortList.length - 1].value,
      );
      setSearchParams(searchParams);
    }
  }, [props.sortList, searchParams, setSearchParams, sortBy]);

  useEffect(() => {
    isAscending
      ? searchParams.set(QUERY_PARAMS.ORDER, "asc")
      : searchParams.set(QUERY_PARAMS.ORDER, "desc");

    setSearchParams(searchParams);
  }, [isAscending, searchParams, setSearchParams, sortBy]);

  const SortByStateIcon = useMemo(
    () =>
      isAscending ? (
        <SortArrowUpIcon data-testid="asc" />
      ) : (
        <SortArrowDownIcon data-testid="desc" />
      ),
    [isAscending],
  );

  const orderCallback = useCallback(() => setIsAscending((prev) => !prev), []);

  const sortCallback = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value) {
        searchParams.set(QUERY_PARAMS.SORTBY, e.target.value);
      }
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const defaultSortValue = props.sortList[props.sortList.length - 1].value;

  return (
    <>
      <Button
        type="button"
        bg="transparent"
        _hover={{
          bg: "blackAlpha.100",
        }}
        onClick={orderCallback}
        data-testid="sort-button"
        aria-label="sort-button"
      >
        {SortByStateIcon}
      </Button>

      <Select
        w={{
          base: "full",
          sm: 45,
        }}
        h={11}
        color="gray.200"
        fontSize="sm"
        onChange={sortCallback}
        aria-label="sort-select"
        defaultValue={defaultSortValue}
      >
        {props.sortList.map((sort) => (
          <option key={sort.title} value={sort.value}>
            {sort.title}
          </option>
        ))}
      </Select>
    </>
  );
});

export default SortSelect;
