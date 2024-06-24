import { AxiosResponse } from "axios";
import createHttp from "./http";

// Types
import { ImgBBResponse } from "@/types/image";

const http = createHttp({
  baseURL: `${import.meta.env.VITE_UPLOAD_IMAGE_API}?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const uploadImageAndGetUrl = async (
  image: FormData,
): Promise<AxiosResponse<ImgBBResponse>> => {
  return await http.post<FormData, ImgBBResponse>("", image);
};
