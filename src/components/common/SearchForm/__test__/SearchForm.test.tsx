import { render, screen } from "@testing-library/react";

import SearchForm from "..";
import userEvent from "@testing-library/user-event";

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
  });

  it("should prevent the enter key from being pressed", async () => {
    setup();

    const searchBtn = screen.getByRole("button", {
      name: /search student/i,
    });

    await userEvent.type(searchBtn, "{enter}");
  });
});
