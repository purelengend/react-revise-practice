import { useMutation } from "@tanstack/react-query";

// Services
import { uploadImageAndGetUrl } from "@/services";

export const useImage = () => {
  return useMutation({
    mutationFn: (data: FormData) => uploadImageAndGetUrl(data),
  });
};
