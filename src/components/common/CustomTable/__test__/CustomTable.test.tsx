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

  const mockData: Array<{
    value: string;
    mock: string;
  }> = [
    {
      value: "mock",
      mock: "mock",
    },
  ];

  const queryClient = new QueryClient();

  const setup = (
    data: Array<{
      value: string;
      mock: string;
    }>,
    isFetching: boolean,
  ) =>
    render(
      <QueryClientProvider client={queryClient}>
        <UrlContextProvider>
          <CustomTable
            columns={mockColumn}
            data={data}
            isFetching={isFetching}
          />
        </UrlContextProvider>
      </QueryClientProvider>,
    );

  it("should render correctly", () => {
    const { container } = setup(mockData, false);

    expect(container).toMatchSnapshot();
  });

  it("should be loading when fetching data", () => {
    const { container } = setup(mockData, true);

    expect(container).toMatchSnapshot();
  });

  it("should handle loading state when the page is first loaded", () => {
    const { container } = setup([], true);

    expect(container).toMatchSnapshot();
  });

  it("should handle message when no data is fetched", () => {
    const { container } = setup([], false);

    expect(container).toMatchSnapshot();
  });
});
