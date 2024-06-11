import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// Constants
import { AXIOS_DEFAULT_CONFIG } from "../constants";

const createHttp = (config: AxiosRequestConfig) => {
  const http = axios.create({ ...AXIOS_DEFAULT_CONFIG, ...config });

  const onFulfilled = (response: AxiosResponse) => {
    return response;
  };

  const onRejected = (error: AxiosError) => {
    const res = error.response;

    if (res) {
      console.error(
        "Looks like there was a problem. Status Code: " + res.status,
      );
    }

    return Promise.reject(error);
  };

  http.interceptors.response.use(onFulfilled, onRejected);

  const get = async <T>(
    path: string = "",
    config?: object,
  ): Promise<AxiosResponse<T>> => http.get<T>(`${path}`, config);

  const post = async <T, U>(
    path: string = "",
    data: T,
    config?: object,
  ): Promise<AxiosResponse<U>> => http.post<U>(`${path}`, data, config);

  const put = async <T>(
    path: string = "",
    data: T,
    config?: object,
  ): Promise<AxiosResponse<T>> => http.put<T>(`${path}`, data, config);

  const deleteRequest = async <T>(
    path: string = "",
    config?: object,
  ): Promise<AxiosResponse<T>> => http.delete<T>(`${path}`, config);
  return { get, post, put, delete: deleteRequest };
};

export default createHttp;
