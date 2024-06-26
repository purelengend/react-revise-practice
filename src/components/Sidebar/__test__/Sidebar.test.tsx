import { render } from "@testing-library/react";

import Sidebar from "..";

describe("Sidebar test cases", () => {
  const setup = () => render(<Sidebar />);
  it("should render correctly", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
