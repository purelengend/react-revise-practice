import { useDisclosure } from "@chakra-ui/react";

export const useSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return {
    sidebarState: isOpen,
    openSidebar: onOpen,
    closeSidebar: onClose,
  };
};
