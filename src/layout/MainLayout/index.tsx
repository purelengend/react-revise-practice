// Components
import { Sidebar } from "@/components";
// Contexts
import { SidebarContext } from "@/context";
import { Box, Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = (props: { children?: React.ReactNode }) => {
  const { sidebarState, openSidebar, closeSidebar } =
    useContext(SidebarContext);

  return (
    <Box
      w="full"
      h="100vh"
      bg="white.100"
      pl={{
        md: sidebarState ? 270 : 0,
      }}
      transition="all 0.325s ease-in-out"
    >
      <Sidebar sidebarState={sidebarState} onCloseSidebar={closeSidebar} />

      <Button onClick={openSidebar}>Open Sidebar</Button>

      <Outlet />

      {props.children}
    </Box>
  );
};

export default MainLayout;
