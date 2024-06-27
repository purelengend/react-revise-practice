import { useCallback, useMemo, useReducer } from "react";

// Context
import { intialUrlState, urlReducer } from "@/store";

// Constants
import { PAGE_LIMIT, URL_ACTION } from "@/constants";

export const useUrl = () => {
  const [state, dispatch] = useReducer(urlReducer, intialUrlState);

  const path = useMemo(
    () =>
      `?sortBy=${state.sort}&order=${state.order}&page=${state.page}&limit=${PAGE_LIMIT}&name=${state.name}`,
    [state.name, state.order, state.page, state.sort],
  );

  const filterValue = useMemo(() => state.name, [state.name]);

  const setSortValue = useCallback((sortValue: string) => {
    dispatch({
      type: URL_ACTION.SORT,
      payload: sortValue,
    });

    if (sortValue === "")
      dispatch({
        type: URL_ACTION.ORDER,
        payload: "",
      });
  }, []);

  const setOrderValue = useCallback((orderValue: string) => {
    dispatch({
      type: URL_ACTION.ORDER,
      payload: orderValue,
    });
  }, []);

  const setPageValue = useCallback((pageValue: number) => {
    dispatch({
      type: URL_ACTION.PAGE,
      payload: pageValue,
    });
  }, []);

  const resetPageValue = useCallback(() => {
    dispatch({
      type: URL_ACTION.PAGE,
      payload: 1,
    });
  }, []);

  const setFilterValue = useCallback((filterValue: string) => {
    dispatch({
      type: URL_ACTION.FILTER,
      payload: filterValue,
    });
  }, []);

  return {
    path,
    setSortValue,
    setOrderValue,
    sortValue: state.sort,
    currentPage: state.page,
    setPageValue,
    resetPageValue,
    setFilterValue,
    filterValue,
  };
};
