// Hooks
import { useSidebar } from "@/hooks";
import { createContext } from "react";

export type SidebarContextProps = {
  sidebarState: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps,
);

export const SidebarContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const { sidebarState, openSidebar, closeSidebar, toggleSidebar } =
    useSidebar();

  return (
    <SidebarContext.Provider
      value={{
        sidebarState,
        openSidebar,
        closeSidebar,
        toggleSidebar,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};
