import { ReactNode, createContext, useMemo } from "react";

// Hooks
import { useUrl } from "@/hooks";

export type UrlContextProps = {
  path: string;
  sortValue: string;
  setSortValue: (sortValue: string) => void;
  setOrderValue: (orderValue: string) => void;
  currentPage: number;
  setPageValue: (pageValue: number) => void;
  resetPageValue: () => void;
};

export const UrlContext = createContext<UrlContextProps>({} as UrlContextProps);

export const UrlContextProvider = (props: { children: ReactNode }) => {
  const {
    path,
    setOrderValue,
    sortValue,
    setSortValue,
    currentPage,
    setPageValue,
    resetPageValue,
  } = useUrl();

  const urlContextValue = useMemo(
    () => ({
      path,
      setOrderValue,
      sortValue,
      setSortValue,
      currentPage,
      setPageValue,
      resetPageValue,
    }),
    [
      currentPage,
      path,
      resetPageValue,
      setOrderValue,
      setPageValue,
      setSortValue,
      sortValue,
    ],
  );
  return (
    <UrlContext.Provider value={urlContextValue}>
      {props.children}
    </UrlContext.Provider>
  );
};
