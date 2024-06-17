import { extendTheme } from "@chakra-ui/react";

// Base theme
import { colors, fonts, space, breakpoints, fontSizes } from "./base";

// Component themes
import { Drawer, Link } from "./components";

const themes = extendTheme({
  colors,
  breakpoints,
  space,
  fonts,
  fontSizes,
  components: {
    Drawer,
    Link,
  },
});

export default themes;
