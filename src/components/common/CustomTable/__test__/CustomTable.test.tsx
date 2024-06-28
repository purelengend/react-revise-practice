import { render } from "@testing-library/react";

// Component
import CustomTable from "..";

describe("CustomTable test cases", () => {
  const mockColumn = [
    {
      title: "Mock Title",
      key: "value",
    },
    {
      title: "Mock render title",
      key: "mock",
      render: () => <></>,
    },
  ];

  const mockData: Array<{
    value: string;
    mock: string;
  }> = [
    {
      value: "mock",
      mock: "mock",
    },
  ];

  const setup = (
    data: Array<{
      value: string;
      mock: string;
    }>,
    isFetching: boolean,
  ) =>
    render(
      <CustomTable columns={mockColumn} data={data} isFetching={isFetching} />,
    );

  it("should render correctly", () => {
    const { container } = setup(mockData, false);

    expect(container).toMatchSnapshot();
  });

  it("should be loading when fetching data", () => {
    const { container } = setup(mockData, true);

    expect(container).toMatchSnapshot();
  });

  it("should handle loading state when the page is first loaded", () => {
    const { container } = setup([], true);

    expect(container).toMatchSnapshot();
  });

  it("should handle message when no data is fetched", () => {
    const { container } = setup([], false);

    expect(container).toMatchSnapshot();
  });
});
