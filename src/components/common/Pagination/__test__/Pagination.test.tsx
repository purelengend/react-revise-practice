import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Component
import Pagination, { PaginationProps } from "..";

// Context
import { UrlContextProvider } from "@/context";

describe("Pagination test cases", () => {
  const mockPaginationProps: PaginationProps = {
    totalRecords: 30,
    pageLimit: 6,
  };

  const setup = () => {
    userEvent.setup();
    return render(
      <UrlContextProvider>
        <Pagination {...mockPaginationProps} />
      </UrlContextProvider>,
    );
  };

  it("should render correctly", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it("should invoke handlePageChange function when clicking page number", async () => {
    setup();

    const pageNumberBtn = screen.getByRole("button", {
      name: /2/i,
    });

    await userEvent.click(pageNumberBtn);
  });
});
