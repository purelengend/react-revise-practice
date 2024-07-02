import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";

// Component
import Pagination, { PaginationProps } from "..";

// Utils
import { customRender } from "@/utils";

describe("Pagination test cases", () => {
  const mockPaginationProps: PaginationProps = {
    totalRecords: 30,
    pageLimit: 6,
  };

  const setup = () => {
    userEvent.setup();
    return customRender(<Pagination {...mockPaginationProps} />);
  };

  it("should render correctly", async () => {
    const { container } = await act(() => setup());

    expect(container).toMatchSnapshot();
  });

  it("should invoke handlePageChange function when clicking page number", async () => {
    await act(() => setup());

    const pageNumberBtn = screen.getByRole("button", {
      name: /2/i,
    });

    await userEvent.click(pageNumberBtn);

    expect(pageNumberBtn).toHaveAttribute("data-active", "");
  });
});
