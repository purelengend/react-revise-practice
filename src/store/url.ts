// Constants
import { PAGE_LIMIT, URL_ACTION } from "@/constants";

export type UrlAction =
  | { type: "SORT"; payload: string }
  | { type: "ORDER"; payload: string }
  | { type: "PAGE"; payload: number }
  | { type: "FILTER"; payload: string };

export type UrlState = {
  sort: string;
  order: string;
  page: number;
  limit: number;
  name: string;
};

export const intialUrlState: UrlState = {
  sort: "",
  order: "",
  page: 1,
  limit: PAGE_LIMIT,
  name: "",
};

export const urlReducer = (state: UrlState, action: UrlAction) => {
  const { type, payload } = action;

  switch (type) {
    case URL_ACTION.ORDER:
      return {
        ...state,
        order: payload,
      };

    case URL_ACTION.SORT:
      return {
        ...state,
        sort: payload,
      };
    case URL_ACTION.PAGE:
      return {
        ...state,
        page: payload,
      };
    case URL_ACTION.FILTER:
      return {
        ...state,
        name: payload,
      };
    default:
      return state;
  }
};
