import { CloseIcon } from "@chakra-ui/icons";
import {
  Center,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

// Components
import { UserCard } from "../common";

// Constants
import { ROLES, SIDEBAR_ITEM_LIST } from "@/constants";

export type SidebarProps = {
  sidebarState: boolean;
  onCloseSidebar: () => void;
};

const Sidebar = memo(({ sidebarState, onCloseSidebar }: SidebarProps) => {
  return (
    <Drawer
      placement="left"
      isOpen={sidebarState}
      onClose={onCloseSidebar}
      closeOnOverlayClick={true}
      variant={{
        md: "clickThrough",
      }}
    >
      <DrawerOverlay bg="rgba(101, 101, 101, .6)"></DrawerOverlay>

      <DrawerContent
        bg="white.200"
        position="relative"
        maxW={270}
        px={6.25}
        py={4.5}
      >
        <Center borderLeft="4px solid" borderLeftColor="yellow.100">
          <Link
            as={ReactRouterLink}
            to="/"
            w={220}
            fontWeight="bold"
            fontSize="lg"
            textAlign="center"
            _hover={{ textDecoration: "none" }}
          >
            CRUD OPERATIONS
          </Link>
        </Center>

        <UserCard mt={13.5} name="Karthi Madesh" role={ROLES.ADMIN} />
        <VStack mt={22.5} px={3.75}>
          {SIDEBAR_ITEM_LIST.map((item) => {
            return (
              <Link
                as={ReactRouterLink}
                key={item.title}
                to={item.destination}
                _hover={{ textDecoration: "none", bg: "yellow.200" }}
                w="full"
                py={2.5}
                borderRadius={4}
              >
                <HStack pl={10} gap={4}>
                  {item.icon}
                  <Text textAlign="center" fontWeight="500" fontSize="sm">
                    {item.title}
                  </Text>
                </HStack>
              </Link>
            );
          })}
        </VStack>
        <DrawerCloseButton
          position="absolute"
          boxSize={6}
          top={0}
          right={1}
          onClick={onCloseSidebar}
        >
          <CloseIcon w={3} h={3} />
        </DrawerCloseButton>
      </DrawerContent>
    </Drawer>
  );
});

export default Sidebar;
