import { screen, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";

// Component
import SortSelect from "..";

// Types
import { SortProps } from "@/types";

// Context
import { UrlContextProvider } from "@/context";

describe("SortSelect test cases", () => {
  const mockSortList: Array<SortProps> = [
    {
      title: "mock title",
      value: "mock value",
    },
  ];

  const queryClient = new QueryClient();

  const setup = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <UrlContextProvider>
          <SortSelect sortList={mockSortList} />
        </UrlContextProvider>
      </QueryClientProvider>,
    );

  it("should render correctly", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it("should render with default sort icon", () => {
    setup();
    const defaultSortIcon = screen.getByTestId("default");

    expect(defaultSortIcon).toBeInTheDocument();
  });

  it("should render ascending sort icon when selecting by default", async () => {
    setup();
    const selectCombobox = screen.getByRole("combobox");

    const selectOption = screen.getByRole("option", { name: "mock title" });

    await userEvent.selectOptions(selectCombobox, selectOption);

    const ascendingSortIcon = screen.getByTestId("asc");

    expect(ascendingSortIcon).toBeInTheDocument();
  });

  it("should toggle state of sort icon", async () => {
    setup();
    const selectCombobox = screen.getByRole("combobox");

    const selectOption = screen.getByRole("option", { name: "mock title" });

    await userEvent.selectOptions(selectCombobox, selectOption);

    const ascendingSortIcon = screen.getByTestId("asc");

    expect(ascendingSortIcon).toBeInTheDocument();

    await userEvent.click(ascendingSortIcon);

    const descendingSortIcon = screen.getByTestId("desc");

    expect(descendingSortIcon).toBeInTheDocument();
  });
});
