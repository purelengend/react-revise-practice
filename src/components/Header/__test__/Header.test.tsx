import { render } from "@testing-library/react";

import Header from "..";

describe("Header test cases", () => {
  it("should render correctly", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
