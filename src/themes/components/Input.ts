import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    fontWeight: "normal",
    borderRadius: "lg",
  },
});

const sm = defineStyle({
  fontsize: "sm",
  padding: 3,
});

const sizes = {
  sm: definePartsStyle({
    field: sm,
    addon: sm,
    element: sm,
  }),
};

export const Input = defineMultiStyleConfig({
  sizes,
  baseStyle,
  defaultProps: {
    size: "sm",
    variant: "outline",
  },
});
