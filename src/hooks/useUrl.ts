import { useCallback, useMemo, useReducer } from "react";

// Context
import { intialUrlState, urlReducer } from "@/store";

// Constants
import { URL_ACTION } from "@/constants";

export const useUrl = () => {
  const [state, dispatch] = useReducer(urlReducer, intialUrlState);

  const path = useMemo(
    () => `?sortBy=${state.sort}&order=${state.order}&page=${state.page}`,
    [state.order, state.page, state.sort],
  );

  const setSortValue = useCallback(
    (sortValue: string) => {
      dispatch({
        type: URL_ACTION.SORT,
        payload: sortValue,
      });

      if (sortValue === "")
        dispatch({
          type: URL_ACTION.ORDER,
          payload: "",
        });
    },
    [dispatch],
  );

  const setOrderValue = useCallback(
    (orderValue: string) => {
      dispatch({
        type: URL_ACTION.ORDER,
        payload: orderValue,
      });
    },
    [dispatch],
  );

  const setPageValue = useCallback(
    (pageValue: number) => {
      dispatch({
        type: URL_ACTION.PAGE,
        payload: pageValue,
      });
    },
    [dispatch],
  );

  return {
    path,
    setSortValue,
    setOrderValue,
    sortValue: state.sort,
    currentPage: state.page,
    setPageValue,
  };
};
