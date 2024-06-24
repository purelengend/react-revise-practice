import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Button, Select } from "@chakra-ui/react";

// Components
import { SortArrowDownIcon, SortArrowUpIcon, SortIcon } from "../Icons";

// Types
import { SortProps } from "@/types";

// Hooks
import { useStudent } from "@/hooks";
import { UrlContext } from "@/context";

const SortSelect = (props: { sortList: Array<SortProps> }) => {
  const [isAscending, setIsAscending] = useState(true);

  const { sortValue, setSortValue, setOrderValue, path } =
    useContext(UrlContext);

  const { refetchStudents } = useStudent();

  useEffect(() => {
    if (sortValue !== "") {
      isAscending ? setOrderValue("asc") : setOrderValue("desc");
    }
  }, [sortValue, isAscending, setOrderValue, setSortValue]);

  useEffect(() => {
    refetchStudents();
  }, [path, refetchStudents]);

  const SortByStateIcon = useMemo(
    () =>
      sortValue === "" ? (
        <SortIcon />
      ) : isAscending ? (
        <SortArrowUpIcon />
      ) : (
        <SortArrowDownIcon />
      ),
    [sortValue, isAscending],
  );

  const orderCallback = useCallback(() => setIsAscending((prev) => !prev), []);

  const sortCallback = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setSortValue(e.target.value),
    [setSortValue],
  );

  return (
    <>
      <Button
        bg="transparent"
        _hover={{
          bg: "blackAlpha.100",
        }}
        onClick={orderCallback}
        isDisabled={sortValue === ""}
      >
        {SortByStateIcon}
      </Button>

      <Select
        w={45}
        h={11}
        color="gray.200"
        fontSize="sm"
        value={sortValue}
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
