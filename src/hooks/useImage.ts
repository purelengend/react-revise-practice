import { useMutation } from "@tanstack/react-query";

// Services
import { uploadImageAndGetUrl } from "@/services";

export const useImage = () => {
  return useMutation({
    mutationFn: (data: FormData) => uploadImageAndGetUrl(data),
  });

  // const uploadImage = useCallback(
  //   (image: File) => {
  //     const imageFormData = new FormData();

  //     imageFormData.append("image", image);

  //     mutate(imageFormData);
  //   },
  //   [mutate],
  // );
};
