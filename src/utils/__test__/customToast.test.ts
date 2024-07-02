import { customToast } from "../customToast";
import { TOAST_DEFAULT_OPTIONS } from "@/constants";

describe("customToast", () => {
  it("should return success toast options when status is 'success'", () => {
    const title = "Success";
    const description = "Operation completed successfully";
    const status = "success";

    const result = customToast(title, description, status);

    expect(result).toEqual({
      ...TOAST_DEFAULT_OPTIONS.SUCCESS,
      title,
      description,
    });
  });

  it("should return error toast options when status is 'error'", () => {
    const title = "Error";
    const description = "An error occurred";
    const status = "error";

    const result = customToast(title, description, status);

    expect(result).toEqual({
      ...TOAST_DEFAULT_OPTIONS.ERROR,
      title,
      description,
    });
  });
});
