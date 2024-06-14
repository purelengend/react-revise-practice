import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <MainLayout>
        <div>Oops. Path not found!</div>
      </MainLayout>
    ),
    children: [
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
