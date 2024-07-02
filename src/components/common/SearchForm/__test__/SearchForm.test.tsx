import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Components
import SearchForm from "..";

// Hooks
import { useQueryParams } from "@/hooks";

// Utils
import { AllTheProviders } from "@/utils";

describe("SearchForm test cases", () => {
  const mockOnSubmit = jest.fn();

  const setup = () => {
    userEvent.setup();
    return render(<SearchForm searchParam="mock" onSubmit={mockOnSubmit} />);
  };
  it("should render correctly", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it("should invoke onChange function when typing", async () => {
    setup();

    const searchInput = screen.getByRole("textbox");

    await userEvent.type(searchInput, "mock search");

    expect(searchInput).toHaveValue("mock search");
  });

  it("should prevent the enter key from being pressed", async () => {
    setup();

    const { result } = renderHook(() => useQueryParams(), {
      wrapper: AllTheProviders,
    });

    const searchBtn = screen.getByRole("button", {
      name: /search student/i,
    });

    await userEvent.type(searchBtn, "{enter}");

    expect(result.current.name).toBe("");
  });
});
