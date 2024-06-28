import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

// Components
import { Header, Sidebar } from "@/components";

// Contexts
import { UrlContextProvider } from "@/context";

// Hooks
import { useSidebar } from "@/hooks";

const MainLayout = (props: { children?: React.ReactNode }) => {
  const { sidebarState, closeSidebar, toggleSidebar } = useSidebar();

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

      <UrlContextProvider>
        <Header onToggleSidebar={toggleSidebar} />

        <Outlet />
        {props.children}
      </UrlContextProvider>
    </Box>
  );
};

export default MainLayout;
