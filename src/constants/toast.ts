import { UseToastOptions } from "@chakra-ui/react";

export const TOAST_DEFAULT_OPTIONS: Record<string, UseToastOptions> = {
  SUCCESS: {
    duration: 3000,
    isClosable: true,
    position: "top",
    status: "success",
  },
  ERROR: {
    duration: 3000,
    isClosable: true,
    position: "top",
    colorScheme: "red",
    status: "error",
  },
};

export const TOAST_MSG = {
  ADD: {
    SUCCESS: {
      title: "Student created.",
      description: "A student has been successfully added to this system!",
    },
    ERROR: {
      title: "Student creation failed.",
      description: "An error occurred while creating a new student.",
    },
  },
  EDIT: {
    SUCCESS: {
      title: "Student edited.",
      description: "This student information has been edited successfully!",
    },
    ERROR: {
      title: "Student edit failed.",
      description: "An error occurred while editing this student.",
    },
  },
  DELETE: {
    SUCCESS: {
      title: "Student deleted.",
      description:
        "This student has been removed from this system, this action cannot be undone.",
    },
    ERROR: {
      title: "Student deletion failed.",
      description: "An error occurred while deleting this student.",
    },
  },
};
