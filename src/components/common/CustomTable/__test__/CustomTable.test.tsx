import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Component
import CustomTable from "..";

// Context
import { UrlContextProvider } from "@/context";

describe("CustomTable test cases", () => {
  const mockColumn = [
    {
      title: "Mock Title",
      key: "value",
    },
    {
      title: "Mock render title",
      key: "mock",
      render: () => <></>,
    },
  ];

  const mockData = [
    {
      value: "mock",
      mock: "mock",
    },
  ];

  const queryClient = new QueryClient();

  const setup = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <UrlContextProvider>
          <CustomTable columns={mockColumn} data={mockData} />
        </UrlContextProvider>
      </QueryClientProvider>,
    );

  it("should render correctly", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
