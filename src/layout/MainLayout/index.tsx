import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

// Components
import { Header, Sidebar } from "@/components";

const MainLayout = (props: { children?: React.ReactNode }) => {
  const {
    isOpen: sidebarState,
    onClose: closeSidebar,
    onToggle: toggleSidebar,
  } = useDisclosure({
    defaultIsOpen: true,
  });
  return (
    <Box
      w="full"
      h="full"
      bg="white"
      pl={{
        md: sidebarState ? 270 : 0,
      }}
      transition="all 0.325s ease-in-out"
    >
      <Sidebar isOpen={sidebarState} onClose={closeSidebar} />

      <Header onToggleSidebar={toggleSidebar} />

      <Outlet />
      {props.children}
    </Box>
  );
};

export default MainLayout;
