import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  bg: "transparent",
  border: "none",
  _hover: {
    bg: "blackAlpha.100",
  },
});

export const IconButton = defineStyleConfig({
  variants: { outline },
  defaultProps: {
    variant: "outline",
  },
});
