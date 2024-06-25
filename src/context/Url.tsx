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
  filterValue: string;
  setFilterValue: (filterValue: string) => void;
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
    setFilterValue,
    filterValue,
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
      setFilterValue,
      filterValue,
    }),
    [
      currentPage,
      filterValue,
      path,
      resetPageValue,
      setFilterValue,
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
