import * as v from "valibot";

// Constants
import { FORM_ERROR } from "@/constants";

export const StudentSchema = v.object({
  id: v.string(),
  name: v.pipe(v.string(), v.minLength(4, FORM_ERROR.NAME)),
  email: v.pipe(v.string(), v.email(FORM_ERROR.EMAIL)),
  phone: v.pipe(v.string(), v.regex(/^\d{3}-\d{3}-\d{4}$/, FORM_ERROR.PHONE)),
  dateOfAdmission: v.number(),
  avatarUrl: v.string(),
});
