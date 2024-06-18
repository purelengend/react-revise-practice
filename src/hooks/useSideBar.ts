import { useDisclosure } from "@chakra-ui/react";

export const useSidebar = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure({
    defaultIsOpen: true,
  });

  return {
    sidebarState: isOpen,
    openSidebar: onOpen,
    closeSidebar: onClose,
    toggleSidebar: onToggle,
  };
};
