import { ChangeEvent, KeyboardEvent } from "react";
import { formatPhoneNumber, onlyNumberKeyDown } from "@/utils/format";

describe("formatPhoneNumber test cases", () => {
  let mockOnChange: jest.Mock;

  beforeEach(() => {
    mockOnChange = jest.fn();
  });

  const createEvent = (value: string): ChangeEvent<HTMLInputElement> => {
    return {
      target: { value } as HTMLInputElement,
    } as ChangeEvent<HTMLInputElement>;
  };

  it("should format phone number correctly when less than 4 digits are entered", () => {
    const event = createEvent("123");
    formatPhoneNumber(mockOnChange)(event);
    expect(mockOnChange).toHaveBeenCalledWith("123");
  });

  it("should format phone number correctly when 4 to 6 digits are entered", () => {
    const event = createEvent("1234");
    formatPhoneNumber(mockOnChange)(event);
    expect(mockOnChange).toHaveBeenCalledWith("123-4");

    const event2 = createEvent("12345");
    formatPhoneNumber(mockOnChange)(event2);
    expect(mockOnChange).toHaveBeenCalledWith("123-45");

    const event3 = createEvent("123456");
    formatPhoneNumber(mockOnChange)(event3);
    expect(mockOnChange).toHaveBeenCalledWith("123-456");
  });

  it("should format phone number correctly when more than 6 digits are entered", () => {
    const event = createEvent("1234567");
    formatPhoneNumber(mockOnChange)(event);
    expect(mockOnChange).toHaveBeenCalledWith("123-456-7");

    const event2 = createEvent("12345678");
    formatPhoneNumber(mockOnChange)(event2);
    expect(mockOnChange).toHaveBeenCalledWith("123-456-78");

    const event3 = createEvent("123456789");
    formatPhoneNumber(mockOnChange)(event3);
    expect(mockOnChange).toHaveBeenCalledWith("123-456-789");

    const event4 = createEvent("1234567890");
    formatPhoneNumber(mockOnChange)(event4);
    expect(mockOnChange).toHaveBeenCalledWith("123-456-7890");
  });

  it("should handle existing hyphens correctly", () => {
    const event = createEvent("123-4");
    formatPhoneNumber(mockOnChange)(event);
    expect(mockOnChange).toHaveBeenCalledWith("123-4");

    const event2 = createEvent("123-45");
    formatPhoneNumber(mockOnChange)(event2);
    expect(mockOnChange).toHaveBeenCalledWith("123-45");

    const event3 = createEvent("123-456");
    formatPhoneNumber(mockOnChange)(event3);
    expect(mockOnChange).toHaveBeenCalledWith("123-456");

    const event4 = createEvent("123-456-7");
    formatPhoneNumber(mockOnChange)(event4);
    expect(mockOnChange).toHaveBeenCalledWith("123-456-7");

    const event5 = createEvent("123-456-78");
    formatPhoneNumber(mockOnChange)(event5);
    expect(mockOnChange).toHaveBeenCalledWith("123-456-78");

    const event6 = createEvent("123-456-789");
    formatPhoneNumber(mockOnChange)(event6);
    expect(mockOnChange).toHaveBeenCalledWith("123-456-789");

    const event7 = createEvent("123-456-7890");
    formatPhoneNumber(mockOnChange)(event7);
    expect(mockOnChange).toHaveBeenCalledWith("123-456-7890");
  });
});

describe("onlyNumberKeyDown test cases", () => {
  // Mock the preventDefault function
  const createEvent = (key: string) => {
    const event = {
      key,
    } as KeyboardEvent<HTMLInputElement>;
    Object.defineProperty(event, "preventDefault", { value: jest.fn() });
    return event;
  };
  it("should allow digits", () => {
    for (let i = 0; i <= 9; i++) {
      const event = createEvent(i.toString());
      onlyNumberKeyDown(event);
      expect(event.preventDefault).not.toHaveBeenCalled();
    }
  });

  it("should allow Backspace", () => {
    const event = createEvent("Backspace");
    onlyNumberKeyDown(event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it("should allow Delete", () => {
    const event = createEvent("Delete");
    onlyNumberKeyDown(event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it("should allow Tab", () => {
    const event = createEvent("Tab");
    onlyNumberKeyDown(event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it("should prevent non-digit keys", () => {
    const nonDigitKeys = ["a", "Enter", " ", "Shift"];
    nonDigitKeys.forEach((key) => {
      const event = createEvent(key);
      onlyNumberKeyDown(event);
      expect(event.preventDefault).toHaveBeenCalled();
    });
  });
});
