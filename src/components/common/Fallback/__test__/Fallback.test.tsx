import { customRender } from "@/utils";

// Components
import Fallback from "..";

describe("Fallback component test case", () => {
  const setup = () => customRender(<Fallback />);

  it("should render correctly", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
