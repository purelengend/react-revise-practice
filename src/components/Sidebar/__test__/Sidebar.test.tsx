import { render } from "@testing-library/react";
import Sidebar, { SidebarProps } from "..";

describe("Sidebar test cases", () => {
  const mockSidebarProps: SidebarProps = {
    sidebarState: false,
    onCloseSidebar: jest.fn(),
  };
  it("should render correctly", () => {
    const { container } = render(<Sidebar {...mockSidebarProps} />);
    expect(container).toMatchSnapshot();
  });
});
