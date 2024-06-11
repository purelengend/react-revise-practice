import { AxiosRequestConfig } from "axios";

export const AXIOS_DEFAULT_CONFIG: AxiosRequestConfig = {
  timeout: 0,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
} as const;
