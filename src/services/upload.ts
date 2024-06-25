import { AxiosResponse } from "axios";
import createHttp from "./http";

// Types
import { ImgBBResponse } from "@/types/image";

// Utils
import { required } from "@/utils/config";

// Constants
import { API } from "@/constants";

const http = createHttp({
  baseURL: `${required(API.IMAGE)}?key=${required(API.IMGBB_KEY)}`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const uploadImageAndGetUrl = async (
  image: FormData,
): Promise<AxiosResponse<ImgBBResponse>> => {
  return await http.post<FormData, ImgBBResponse>("", image);
};
