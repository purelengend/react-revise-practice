import { act } from "react";
import { screen } from "@testing-library/react";

// Components
import Sidebar from "..";

// Utils
import { customRender } from "@/utils";

describe("Sidebar test cases", () => {
  const mockOnClose = jest.fn();

  const setup = () =>
    customRender(<Sidebar isOpen={true} onClose={mockOnClose} />);

  it("should render correctly", async () => {
    const { container } = await act(() => setup());

    expect(container).toMatchSnapshot();
  });

  it("should invoke onClose function when clicking close button", async () => {
    await act(() => setup());

    const closeBtn = screen.getByRole("button", {
      name: /close/i,
    });

    await act(() => closeBtn.click());

    expect(mockOnClose).toHaveBeenCalled();
  });
});
