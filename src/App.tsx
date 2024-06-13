import { ChakraProvider } from "@chakra-ui/react";

// Layout
import MainLayout from "@/layout/MainLayout";

// Pages
import { MainPage } from "./pages";

//Themes
import themes from "./themes";

// Context
import { SidebarContextProvider } from "./context";

// Chakra UI Fonts
import { Fonts } from "./themes/base";
function App() {
  return (
    <ChakraProvider theme={themes}>
      <Fonts />
      <SidebarContextProvider>
        <MainLayout>
          <MainPage />
        </MainLayout>
      </SidebarContextProvider>
    </ChakraProvider>
  );
}

export default App;
