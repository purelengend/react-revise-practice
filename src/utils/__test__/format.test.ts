import { formatPhoneNumber } from "../index";

describe("formatPhoneNumber", () => {
  it("should format a valid phone number correctly", () => {
    const phoneNumber = "1234567890";
    const formattedNumber = formatPhoneNumber(phoneNumber);
    expect(formattedNumber).toBe("123-456-7890");
  });

  it("should throw an error for an invalid phone number", () => {
    const phoneNumber = "12345";
    expect(() => {
      formatPhoneNumber(phoneNumber);
    }).toThrow("Invalid phone number. Must be a 10-digit number.");
  });
});
