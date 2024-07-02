import { act } from "react";
import { customWrapper } from "@/utils";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Components
import Header from "..";

describe("Header test cases", () => {
  const mockToggle = jest.fn();

  const setup = () =>
    render(<Header onToggleSidebar={mockToggle} />, {
      wrapper: customWrapper("?name=mock"),
    });
  it("should render correctly", async () => {
    const { container } = await act(() => setup());

    expect(container).toMatchSnapshot();
  });

  it("should handle submit function when submitting the search form", async () => {
    const { container } = await act(() => setup());

    const searchInput = screen.getByRole("textbox");

    await userEvent.type(searchInput, "mock search");

    const form = container.querySelector("#search-form") as HTMLFormElement;

    await act(() => fireEvent.submit(form));

    expect(form).toHaveFormValues({ searchValue: "mock search" });
  });
});
