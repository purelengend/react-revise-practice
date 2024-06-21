import { extendTheme } from "@chakra-ui/react";

// Base theme
import { colors, fonts, space, breakpoints, fontSizes, sizes } from "./base";

// Component themes
import { Alert, Drawer, Form, IconButton, Input, Link } from "./components";

const themes = extendTheme({
  colors,
  breakpoints,
  space,
  sizes,
  fonts,
  fontSizes,
  components: {
    Drawer,
    Link,
    Input,
    Form,
    Alert,
    Button: IconButton,
  },
});

export default themes;
