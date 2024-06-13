import { extendTheme } from "@chakra-ui/react";

// Base theme
import { colors, fonts, space } from "./base";

// Component themes
import { Drawer } from "./components";
import { breakpoints } from "./base/breakpoint";

const themes = extendTheme({
  colors,
  breakpoints,
  space,
  fonts,
  components: {
    Drawer,
  },
});

export default themes;
