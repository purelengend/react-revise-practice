import { createContext } from "react";

// Hooks
import { useSidebar } from "@/hooks";

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
  return (
    <SidebarContext.Provider
      value={{
        sidebarState,
        openSidebar,
        closeSidebar,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};
