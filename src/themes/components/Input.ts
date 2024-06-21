import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    fontWeight: "normal",
    borderRadius: "lg",
    color: "gray.100",
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

const outline = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "white.300",
    bg: "white",
  },
});

const filled = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "white.300",
    bg: "white.400",
    height: 12,
    color: "black",
  },
});

export const Input = defineMultiStyleConfig({
  sizes,
  baseStyle,
  variants: {
    outline,
    filled,
  },
  defaultProps: {
    size: "sm",
    variant: "outline",
  },
});
