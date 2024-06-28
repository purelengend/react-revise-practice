import { act } from "react";
import Sidebar from "..";
import { customRender } from "@/utils";

describe("Sidebar test cases", () => {
  const mockOnClose = jest.fn();

  const setup = () =>
    customRender(<Sidebar isOpen={true} onClose={mockOnClose} />);

  it("should render correctly", async () => {
    const { container } = await act(() => setup());

    expect(container).toMatchSnapshot();
  });
});
