// Layout
import MainLayout from "@/layout/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Context
import { SidebarContextProvider } from "./context";
// Pages
import { MainPage } from "./pages";
//Themes
import themes from "./themes";
// Chakra UI Fonts
import { Fonts } from "./themes/base";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Oops. Path not found!</div>,
    children: [
      {
        path: "/*",
        element: <div>Oops. Children path not found</div>,
      },
      { index: true, element: <div>Index page</div> },
      {
        path: "/students",
        element: <MainPage />,
      },
    ],
  },
]);
function App() {
  return (
    <ChakraProvider theme={themes}>
      <Fonts />
      <SidebarContextProvider>
        <RouterProvider router={router} />
      </SidebarContextProvider>
    </ChakraProvider>
  );
}

export default App;
