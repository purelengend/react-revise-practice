import { CloseIcon } from "@chakra-ui/icons";
import {
  Center,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Link,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { UserCard } from "../common";
import { ROLES } from "@/constants";

export type SidebarProps = {
  sidebarState: boolean;
  onCloseSidebar: () => void;
};

const Sidebar = ({ sidebarState, onCloseSidebar }: SidebarProps) => {
  return (
    <Drawer
      placement="left"
      isOpen={sidebarState}
      onClose={onCloseSidebar}
      closeOnOverlayClick={true}
    >
      <DrawerOverlay bg="rgba(101, 101, 101, .6)"></DrawerOverlay>

      <DrawerContent
        bg="white.200"
        position="relative"
        maxW={270}
        px={4.5}
        py={6.25}
      >
        <Center borderLeft="4px solid" borderLeftColor="yellow.100">
          <Link
            as={ReactRouterLink}
            to="/"
            width={220}
            fontSize="lg"
            textAlign="center"
            outline="none"
            _hover={{ textDecoration: "none" }}
          >
            CRUD OPERATIONS
          </Link>
        </Center>

        <UserCard mt={13.5} name="Karthi" role={ROLES.ADMIN} />
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
};

export default Sidebar;
