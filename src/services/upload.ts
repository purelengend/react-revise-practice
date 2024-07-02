import { AxiosResponse } from "axios";
import createHttp from "./http";

// Types
import { ImgBBResponse } from "@/types/image";

// Utils
import { required } from "@/utils";

// Constants
import { API } from "@/constants";

export const imageHttp = createHttp({
  baseURL: `${required(API.IMAGE)}?key=${required(API.IMGBB_KEY)}`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const uploadImageAndGetUrl = async (
  image: FormData,
): Promise<AxiosResponse<ImgBBResponse>> => {
  return await imageHttp.post<FormData, ImgBBResponse>("", image);
};
