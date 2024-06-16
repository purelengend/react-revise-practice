// Hooks
import { useSidebar } from "@/hooks";
import { createContext, useCallback } from "react";

export type SidebarContextProps = {
  sidebarState: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps,
);

export const SidebarContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const { sidebarState, openSidebar, closeSidebar } = useSidebar();

  const openSidebarCallback = useCallback(() => {
    openSidebar;
  }, [openSidebar]);

  const closeSidebarCallback = useCallback(() => {
    closeSidebar;
  }, [closeSidebar]);

  return (
    <SidebarContext.Provider
      value={{
        sidebarState,
        openSidebar: openSidebarCallback,
        closeSidebar: closeSidebarCallback,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};
