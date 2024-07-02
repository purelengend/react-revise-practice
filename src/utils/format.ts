export const formatPhoneNumber = (phoneNumber: string) => {
  // Check if the phone number is valid (10 digits)
  if (!/^\d{10}$/.test(phoneNumber)) {
    throw new Error("Invalid phone number. Must be a 10-digit number.");
  }

  // Format the phone number
  const areaCode = phoneNumber.slice(0, 3);
  const middlePart = phoneNumber.slice(3, 6);
  const lastPart = phoneNumber.slice(6, 10);

  return `${areaCode}-${middlePart}-${lastPart}`;
};
