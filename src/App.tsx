import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Layout
import MainLayout from "@/layout/MainLayout";

// Context
import { SidebarContextProvider } from "./context";

// Pages
import { StudentPage } from "./pages";

//Themes
import themes from "./themes";

// Chakra UI Fonts
import { Fonts } from "./themes/base";

// Router config
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SidebarContextProvider>
        <MainLayout />
      </SidebarContextProvider>
    ),
    errorElement: <div>Oops. Path not found!</div>,
    children: [
      {
        path: "/*",
        element: <div>Oops. Children path not found</div>,
      },
      { index: true, element: <div>Index page</div> },
      {
        path: "/students",
        element: <StudentPage />,
      },
    ],
  },
]);

// QueryClient config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15000,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={themes}>
        <Fonts />
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
