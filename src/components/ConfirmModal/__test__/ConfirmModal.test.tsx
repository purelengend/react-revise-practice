import { screen, render, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useDisclosure } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Component
import ConfirmModal from "..";

describe("ConfirmModal test cases", () => {
  const mockOnSubmit = jest.fn();

  window.URL.createObjectURL = jest.fn();

  const {
    result: {
      current: { isOpen, onClose },
    },
  } = renderHook(() =>
    useDisclosure({
      defaultIsOpen: true,
    }),
  );

  const mockId: string = "0";

  const queryClient = new QueryClient();

  const setup = () => {
    userEvent.setup();
    return render(
      <QueryClientProvider client={queryClient}>
        <ConfirmModal
          id={mockId}
          title=""
          isOpen={isOpen}
          isMutating={false}
          onClose={onClose}
          onSubmit={mockOnSubmit}
        />
      </QueryClientProvider>,
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
});
