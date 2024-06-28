// Components
import Header from "..";
import { act } from "react";
import { customRender } from "@/utils";

describe("Header test cases", () => {
  const mockToggle = jest.fn();

  const setup = () => customRender(<Header onToggleSidebar={mockToggle} />);
  it("should render correctly", async () => {
    const { container } = await act(() => setup());

    expect(container).toMatchSnapshot();
  });
});
