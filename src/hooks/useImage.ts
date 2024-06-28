import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";

// Services
import { uploadImageAndGetUrl } from "@/services";

export const useImage = () => {
  const {
    data: image,
    mutate,
    isPending: isUploadingImage,
    error,
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
    imageUrl: image ? image.data.data.url : undefined,
    isUploadImageFail: !!error,
  };
};
