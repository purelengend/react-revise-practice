import { screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useDisclosure } from "@chakra-ui/react";

// Component
import StudentFormModal from "..";

// Types
import { Student } from "@/types";

// Constants
import { FORM_ERROR } from "@/constants";

// Utils
import { customRender } from "@/utils";

describe("StudentFormModal test cases", () => {
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

  const mockData: Student = {
    id: "",
    name: "",
    email: "",
    phone: "",
    dateOfAdmission: 0,
    avatarUrl: "",
  };

  const mockDataWithId: Student = {
    id: "0",
    name: "valid",
    email: "valid@gmail.com",
    phone: "1234567890",
    dateOfAdmission: 0,
    avatarUrl: "mock",
  };

  const setup = (data: Student) => {
    userEvent.setup();
    return customRender(
      <StudentFormModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={mockOnSubmit}
        isMutating={false}
        student={data}
      />,
    );
  };
  it("should render correctly", () => {
    const { container } = setup(mockData);

    expect(container).toMatchSnapshot();
  });

  it('should display the banner text "Edit student" when the input data has a valid ID', async () => {
    setup(mockDataWithId);

    const banner = screen.getByRole("banner");

    expect(banner.textContent).toEqual("Edit student");
  });

  it("should prevent submit when data is invalid", async () => {
    setup(mockData);

    const submitBtn = screen.getByRole("button", {
      name: /submit/i,
    });

    expect(submitBtn).toHaveAttribute("disabled");
  });

  it("should handle upload image", async () => {
    setup(mockData);

    const uploadInput = screen.getByLabelText("avatar");

    const file = new File(["blob"], "chucknorris.png", { type: "image/png" });

    await userEvent.upload(uploadInput, file);
  });

  it("should display error message when typing invalid data", async () => {
    setup(mockData);

    const nameInput = screen.getByRole("textbox", {
      name: /name/i,
    });

    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });

    const phoneInput = screen.getByRole("textbox", {
      name: /phone/i,
    });

    await userEvent.type(nameInput, "a");

    await userEvent.tab();

    await userEvent.type(emailInput, "a");

    await userEvent.tab();

    await userEvent.type(phoneInput, "1");

    await userEvent.tab();

    const nameError = screen.getByText(new RegExp(FORM_ERROR.NAME, "i"));

    const emailError = screen.getByText(new RegExp(FORM_ERROR.EMAIL, "i"));

    const phoneError = screen.getByText(new RegExp(FORM_ERROR.PHONE, "i"));

    expect(nameError.textContent).toEqual(FORM_ERROR.NAME);

    expect(emailError.textContent).toEqual(FORM_ERROR.EMAIL);

    expect(phoneError.textContent).toEqual(FORM_ERROR.PHONE);
  });

  it("should invoke submit function when clicking submit button", async () => {
    setup(mockData);

    const nameInput = screen.getByRole("textbox", {
      name: /name/i,
    });

    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });

    const phoneInput = screen.getByRole("textbox", {
      name: /phone/i,
    });

    await userEvent.type(nameInput, "valid name");

    await userEvent.tab();

    await userEvent.type(emailInput, "valid@gmail.com");

    await userEvent.tab();

    await userEvent.type(phoneInput, "1234567890");

    await userEvent.tab();

    const submitBtn = screen.getByRole("button", {
      name: /submit/i,
    });

    await userEvent.click(submitBtn);

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
