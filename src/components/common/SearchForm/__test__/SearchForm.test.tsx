import { render } from "@testing-library/react";

import SearchForm from "..";

describe("SearchForm test cases", () => {
  const mockOnSubmit = jest.fn();
  it("should render correctly", () => {
    const { container } = render(<SearchForm onSubmit={mockOnSubmit} />);
    expect(container).toMatchSnapshot();
  });
});
