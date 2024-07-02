import { Suspense, lazy } from "react";
import { Center, ChakraProvider, Heading, Spinner } from "@chakra-ui/react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

// Layout
import MainLayout from "@/layout/MainLayout";

//Themes
import themes from "./themes";

// Chakra UI Fonts
import { Fonts } from "./themes/base";

// Components
import { Fallback } from "./components";

// Pages
const StudentPage = lazy(() => import("@/pages/StudentPage"));

// Router config
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <Center>
        <Heading>Oops. Path not found!</Heading>
      </Center>
    ),
    children: [
      { index: true, element: <Navigate to="/students" replace /> },
      {
        path: "/*",
        element: <Center>Coming Soon!</Center>,
      },
      {
        path: "/students",
        element: (
          <ErrorBoundary fallback={<Fallback />}>
            <Suspense fallback={<Spinner />}>
              <StudentPage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
]);

// QueryClient config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
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
