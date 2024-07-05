export const FORM_TITLE = {
  ADD: "Add student",
  EDIT: "Edit student",
  DELETE: (id: string) =>
    `Are you sure to delete student with enroll number: ${id}?`,
} as const;

export const FORM_ERROR = {
  NAME: "Your name must have at least 4 characters",
  EMAIL: "Please enter a valid email address, e.g., abc@mail.com",
  PHONE: "Please enter a valid phone number with 10 digits",
} as const;
