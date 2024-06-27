import { TOAST_DEFAULT_OPTIONS } from "@/constants";

import { AlertStatus, UseToastOptions } from "@chakra-ui/react";
export const customToast = (
  title: string,
  description: string,
  status: AlertStatus,
): UseToastOptions => {
  if (status === "success") {
    return {
      ...TOAST_DEFAULT_OPTIONS.SUCCESS,
      title,
      description,
    };
  }

  return {
    ...TOAST_DEFAULT_OPTIONS.ERROR,
    title,
    description,
  };
};
