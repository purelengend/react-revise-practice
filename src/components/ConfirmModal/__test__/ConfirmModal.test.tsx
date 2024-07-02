import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Component
import ConfirmModal from "..";

describe("ConfirmModal test cases", () => {
  window.URL.createObjectURL = jest.fn();

  const mockOnSubmit = jest.fn();

  const mockOnClose = jest.fn();

  const mockId: string = "0";

  const setup = () => {
    userEvent.setup();
    return render(
      <ConfirmModal
        id={mockId}
        title=""
        isOpen={true}
        isMutating={false}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
      />,
    );
  };
  it("should render correctly", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it("should invoke submit function when clicking submit button", async () => {
    setup();

    const submitBtn = screen.getByRole("button", {
      name: /yes/i,
    });

    await userEvent.click(submitBtn);

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it("should invoke close function when clicking close button", async () => {
    setup();

    const closeBtn = screen.getByRole("button", {
      name: /cancel/i,
    });

    await userEvent.click(closeBtn);

    expect(mockOnClose).toHaveBeenCalled();
  });
});
