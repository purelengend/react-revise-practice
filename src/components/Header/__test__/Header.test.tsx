import { act } from "react";
import { customRender } from "@/utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Components
import Header from "..";

describe("Header test cases", () => {
  const mockToggle = jest.fn();

  const setup = () => customRender(<Header onToggleSidebar={mockToggle} />);
  it("should render correctly", async () => {
    const { container } = await act(() => setup());

    expect(container).toMatchSnapshot();
  });

  it("should invoke onChange function when typing", async () => {
    setup();

    const searchInput = screen.getByRole("textbox");

    await userEvent.type(searchInput, "mock search");
  });
});
