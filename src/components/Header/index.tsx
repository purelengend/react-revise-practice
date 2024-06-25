import { HamburgerIcon } from "@chakra-ui/icons";
import { Center, HStack, IconButton } from "@chakra-ui/react";
import { useCallback, useContext, useEffect } from "react";

// Components
import { NotificationIcon } from "../common/Icons";
import { SearchForm, SearchFormInput } from "../common";

// Context
import { SidebarContext, UrlContext } from "@/context";

// Hooks
import { useStudentPagination } from "@/hooks";

const Header = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  const { setFilterValue, resetPageValue, filterValue } =
    useContext(UrlContext);

  const { refetchAllStudents } = useStudentPagination();

  const handleSearchSubmit = useCallback(
    ({ searchValue }: SearchFormInput) => {
      setFilterValue(searchValue);
    },
    [setFilterValue],
  );

  useEffect(() => {
    // Update total pages of students
    refetchAllStudents();

    // Reset page index to 1
    resetPageValue();
  }, [filterValue, refetchAllStudents, resetPageValue]);

  return (
    <Center px={4} justifyContent="space-between" h={15}>
      <IconButton
        aria-label="Toggle sidebar"
        icon={<HamburgerIcon boxSize={8} />}
        onClick={toggleSidebar}
      />
      <HStack gap={6} mr={{ md: 12 }}>
        <SearchForm onSubmit={handleSearchSubmit} />
        <NotificationIcon />
      </HStack>
    </Center>
  );
};

export default Header;
