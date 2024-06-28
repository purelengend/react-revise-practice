/* eslint-disable react-refresh/only-export-components */
import { RenderOptions, render } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

// Contexts
import { UrlContextProvider } from "@/context";

const queryClient = new QueryClient({});
export const AllTheProviders = (props: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UrlContextProvider>{props.children}</UrlContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
