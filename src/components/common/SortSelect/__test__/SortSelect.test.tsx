import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";

// Component
import SortSelect from "..";

// Types
import { SortProps } from "@/types";

// Utils
import { customRender } from "@/utils";

describe("SortSelect test cases", () => {
  const mockSortList: Array<SortProps> = [
    {
      title: "mock title",
      value: "mock value",
    },
  ];

  const setup = () => {
    userEvent.setup();

    return customRender(<SortSelect sortList={mockSortList} />);
  };

  it("should render correctly", async () => {
    const { container } = await act(() => setup());

    expect(container).toMatchSnapshot();
  });

  it("should render with default sort icon", async () => {
    await act(() => setup());

    const defaultSortIcon = screen.getByTestId("default");

    expect(defaultSortIcon).toBeInTheDocument();
  });

  it("should render ascending sort icon when selecting by default", async () => {
    await act(() => setup());

    const selectCombobox = screen.getByRole("combobox");

    const selectOption = screen.getByRole("option", { name: "mock title" });

    await userEvent.selectOptions(selectCombobox, selectOption);

    const ascendingSortIcon = screen.getByTestId("asc");

    expect(ascendingSortIcon).toBeInTheDocument();
  });

  it("should toggle state of sort icon", async () => {
    await act(() => setup());

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
