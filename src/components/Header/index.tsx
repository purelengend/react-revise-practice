import { SidebarContext } from "@/context";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Center, HStack, IconButton } from "@chakra-ui/react";
import { useCallback, useContext } from "react";

// Components
import { NotificationIcon } from "../common/Icons";
import { SearchForm, SearchFormInput } from "../common";

const Header = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  // TODO: implement later
  const handleSearchSubmit = useCallback((data: SearchFormInput) => {
    console.log(data);
  }, []);

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
