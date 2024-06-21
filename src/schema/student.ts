/* eslint-disable no-useless-escape */
import * as v from "valibot";
export const StudentSchema = v.object({
  id: v.string(),
  name: v.pipe(
    v.string(),
    v.minLength(4, "Your name must have at least 4 characters"),
  ),
  email: v.pipe(
    v.string(),
    v.email("Please enter a valid email address, e.g., abc@mail.com"),
  ),
  phone: v.pipe(
    v.string(),
    v.regex(/^\d+$/, "Please enter a valid number digit"),
    v.length(10, "Please enter a valid phone number with 10 digits"),
  ),
  dateOfAdmission: v.number(),
  avatarUrl: v.string(),
});
