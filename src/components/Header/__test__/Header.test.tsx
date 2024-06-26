import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Components
import Header from "..";
import { UrlContextProvider } from "@/context";

describe("Header test cases", () => {
  const queryClient = new QueryClient();

  const setup = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <UrlContextProvider>
          <Header />
        </UrlContextProvider>
      </QueryClientProvider>,
    );
  it("should render correctly", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
