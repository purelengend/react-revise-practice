import { HamburgerIcon } from "@chakra-ui/icons";
import { Center, HStack, IconButton } from "@chakra-ui/react";
import { useCallback } from "react";

// Components
import { NotificationIcon } from "../common/Icons";
import { SearchForm, SearchFormInput } from "../common";

// Constants
import { QUERY_PARAMS } from "@/constants";

// Hooks
import { useStudentQueryParams } from "@/hooks";

export type HeaderProps = {
  onToggleSidebar: () => void;
};
const Header = ({ onToggleSidebar }: HeaderProps) => {
  const { name, searchParams, setSearchParams } = useStudentQueryParams();

  const handleSearchSubmit = useCallback(
    ({ searchValue }: SearchFormInput) => {
      // Reset page index when searching
      searchParams.delete(QUERY_PARAMS.PAGE);

      searchValue
        ? searchParams.set(QUERY_PARAMS.NAME, searchValue)
        : searchParams.delete(QUERY_PARAMS.NAME);

      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  return (
    <Center px={4} justifyContent="space-between" h={15}>
      <IconButton
        aria-label="Toggle sidebar"
        icon={<HamburgerIcon boxSize={8} />}
        onClick={onToggleSidebar}
      />
      <HStack gap={6} mr={{ md: 12 }}>
        <SearchForm searchParam={name} onSubmit={handleSearchSubmit} />
        <NotificationIcon />
      </HStack>
    </Center>
  );
};

export default Header;
