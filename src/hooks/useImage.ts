import { useMutation } from "@tanstack/react-query";

// Services
import { uploadImageAndGetUrl } from "@/services";

// Constants
import { DEFAULT_AVATAR_URL } from "@/constants";
import { useCallback } from "react";

export const useImage = () => {
  const {
    data: image,
    mutate,
    isPending: isUploadingImage,
  } = useMutation({
    mutationFn: (data: FormData) => uploadImageAndGetUrl(data),
  });

  const uploadImage = useCallback(
    (image: File) => {
      const imageFormData = new FormData();

      imageFormData.append("image", image);

      mutate(imageFormData);
    },
    [mutate],
  );

  return {
    uploadImage,
    isUploadingImage,
    imageUrl: image ? image.data.data.url : DEFAULT_AVATAR_URL,
  };
};
