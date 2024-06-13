import { CloseIcon } from "@chakra-ui/icons";
import {
  Center,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";

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
        maxW={270}
        bg="white.200"
        px={4.5}
        py={6.25}
        position="relative"
      >
        <Center borderLeft="">
          <Text width={220} fontSize="xl" textAlign="center">
            CRUD OPERATIONS
          </Text>
        </Center>
        <DrawerCloseButton
          boxSize={6}
          onClick={onCloseSidebar}
          position="absolute"
          top={0}
          right={1}
        >
          <CloseIcon w={3} h={3} />
        </DrawerCloseButton>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
